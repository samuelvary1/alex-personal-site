const functions = require('firebase-functions');
const admin = require('firebase-admin');
const axios = require('axios');

admin.initializeApp();
const db = admin.firestore();

// Set up the API details
const CARMAKES_API_URL = 'https://api.api-ninjas.com/v1/carmakes';
const CARMODELS_API_URL = 'https://api.api-ninjas.com/v1/cars';
const API_KEY = 'F6Sjn3A+Xmx/++nl445Pog==wMy8P0o0jjJFx8Jr'; // Replace with your actual API key

// Function to fetch and store all car models for each make
exports.fetchAndStoreAllCarModels = functions.https.onRequest(async (req, res) => {
  try {
    // Step 1: Fetch all car makes
    const carMakesResponse = await axios.get(CARMAKES_API_URL, {
      headers: { 'X-Api-Key': API_KEY }
    });

    const carMakes = carMakesResponse.data; // Array of car makes
    console.log(`Fetched ${carMakes.length} car makes.`);

    // Step 2: Iterate through each car make and fetch its models
    for (const make of carMakes) {
      const makeName = make.name;
      console.log(`Fetching models for make: ${makeName}`);

      // Fetch models for each make
      const carModelsResponse = await axios.get(CARMODELS_API_URL, {
        headers: { 'X-Api-Key': API_KEY },
        params: {
          make: makeName, // Pass make name as query parameter
          limit: 1000 // Set a high limit to get as many models as possible (adjust as needed)
        }
      });

      const carModels = carModelsResponse.data; // Array of car models

      console.log(`Fetched ${carModels.length} models for make: ${makeName}`);

      // Step 3: Store each model in Firestore
      const batch = db.batch(); // Use batch operations for better performance

      carModels.forEach((model) => {
        // Create a Firestore document for each car model
        const modelRef = db.collection('carModels').doc(`${model.make}_${model.model}_${model.year}`);
        batch.set(modelRef, {
          make: model.make,
          model: model.model,
          year: model.year,
          engine: model.engine || 'Unknown',
          horsepower: model.horsepower || 'Unknown',
          transmission: model.transmission || 'Unknown',
          imageUrl: model.image_url || '', // Optional: Store image URL if available
          description: model.description || 'No description available',
          rating: model.rating || 0, // Optional: Store rating if available
        });
      });

      // Commit the batch operation for the current make's models
      await batch.commit();
      console.log(`Stored ${carModels.length} models for make: ${makeName} in Firestore.`);
    }

    res.status(200).send('Successfully fetched and stored all car models for each make.');
  } catch (error) {
    console.error('Error fetching and storing car models:', error);
    res.status(500).send('Failed to fetch and store car models.');
  }
});