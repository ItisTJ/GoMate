import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  destinations: [],
  categories: [
    'All',
    'Historical Sites',
    'Beaches',
    'Hill Country',
    'Wildlife',
    'Adventure Sports',
    'Cultural Sites',
    'Food & Restaurants',
  ],
  districts: [
    'All Districts',
    'Colombo',
    'Gampaha',
    'Kalutara',
    'Kandy',
    'Matale',
    'Nuwara Eliya',
    'Galle',
    'Matara',
    'Hambantota',
    'Jaffna',
    'Kilinochchi',
    'Mannar',
    'Mullaitivu',
    'Vavuniya',
    'Puttalam',
    'Kurunegala',
    'Anuradhapura',
    'Polonnaruwa',
    'Badulla',
    'Monaragala',
    'Ratnapura',
    'Kegalle',
    'Trincomalee',
    'Batticaloa',
    'Ampara',
  ],
  selectedCategory: 'All',
  selectedDistrict: 'All Districts',
  loading: false,
  error: null,
};

const destinationsSlice = createSlice({
  name: 'destinations',
  initialState,
  reducers: {
    fetchDestinationsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDestinationsSuccess: (state, action) => {
      state.loading = false;
      state.destinations = action.payload;
      state.error = null;
    },
    fetchDestinationsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSelectedDistrict: (state, action) => {
      state.selectedDistrict = action.payload;
    },
    updateDestinationRating: (state, action) => {
      const { destinationId, rating } = action.payload;
      const destination = state.destinations.find(d => d.id === destinationId);
      if (destination) {
        destination.rating = rating;
      }
    },
  },
});

export const {
  fetchDestinationsStart,
  fetchDestinationsSuccess,
  fetchDestinationsFailure,
  setSelectedCategory,
  setSelectedDistrict,
  updateDestinationRating,
} = destinationsSlice.actions;

export const mockDestinations = [
  {
    id: 101,
    title: 'Galle Face Green',
    name: 'Colombo',
    description: 'Ocean-side urban park popular for evening walks, kites and street food.',
    category: 'City & Leisure',
    district: 'Colombo',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1526481280698-1910d9bb6be5?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.3,
    location: { latitude: 6.9271, longitude: 79.8612 },
    entryFee: 'Free',
    timings: 'Open 24/7',
    bestTimeToVisit: 'Evenings',
    howToReach: 'Central Colombo, walkable from Fort',
    nearbyPlaces: ['National Museum', 'Old Parliament'],
  },
  {
    id: 102,
    title: 'Pinnawala Elephant Orphanage',
    name: 'Pinnawala',
    description: 'Sanctuary known for large herds of rescued Asian elephants and daily feeding/show times.',
    category: 'Wildlife',
    district: 'Kegalle',
    image: 'https://images.unsplash.com/photo-1543333216-df58adb6ad0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGlubmF3YWxhJTIwZWxlcGhhbnQlMjBvcnBoYW5hZ2V8ZW58MHx8MHx8fDA%3D',
    images: [
      'https://plus.unsplash.com/premium_photo-1683134154488-d356825d37b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGlubmF3YWxhJTIwZWxlcGhhbnQlMjBvcnBoYW5hZ2V8ZW58MHx8MHx8fDA%3D'
    ],
    rating: 4.4,
    location: { latitude: 7.2536, longitude: 80.3600 },
    entryFee: 'LKR 1000 (approx)',
    timings: '8:30 AM - 6:00 PM',
    bestTimeToVisit: 'Mornings and late afternoons',
    howToReach: 'Drive from Kandy or Colombo',
    nearbyPlaces: ['Kandy', 'Mawanella'],
  },
  {
    id: 103,
    title: 'Adam\'s Peak (Sri Pada)',
    name: 'Adam\'s Peak',
    description: 'Famous pilgrimage mountain with a sacred footprint at the summit and spectacular sunrise views.',
    category: 'Hiking & Spiritual',
    district: 'Nuwara Eliya',
    image: 'https://www.ceylonexpeditions.com/medias/destination_places/big/110/sri-pada-adam-s-peak-sri-lanka.jpg',
    images: [
      'https://www.ceylonexpeditions.com/medias/media/big/884/whatsapp-image-2024-12-25-at-06-40-53-2.jpeg',
      'https://i.pinimg.com/originals/ce/fa/87/cefa87af3640db3486f11f5376ced1fd.jpg'
    ],
    rating: 4.7,
    location: { latitude: 6.8126, longitude: 80.4988 },
    entryFee: 'Free',
    timings: 'Night climbs recommended for sunrise',
    bestTimeToVisit: 'December to April',
    howToReach: 'Drive to base and climb at night',
    nearbyPlaces: ['Nallathanniya', 'Hatton'],
  },
  {
    id: 104,
    title: 'Knuckles Mountain Range',
    name: 'Knuckles',
    description: 'Remote range with rich biodiversity, trekking routes and misty peaks.',
    category: 'Nature & Hiking',
    district: 'Matale',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/6c/a9/04/cloudy-knuckles-its-heavenreal.jpg?w=900&h=-1&s=1',
    images: [
      'https://www.yogawinetravel.com/wp-content/uploads/2020/02/Mini-Worlds-End-in-Knuckles-Mountain-Range-in-Sri-Lanka_feature.jpg',
      'https://www.yogawinetravel.com/wp-content/uploads/2020/02/Mini-Worlds-End-in-Knuckles-Mountain-Range-in-Sri-Lanka_feature.jpg',
      'https://admin.myceylonadventures.com/uploads/Trekking_Tour_in_Kandy_Knuckles_Feachured_60b26beeb3.jpg'
    ],
    rating: 4.8,
    location: { latitude: 7.3500, longitude: 80.8000 },
    entryFee: 'Free',
    timings: 'Day hikes',
    bestTimeToVisit: 'January to April',
    howToReach: 'Drive to trailheads from Matale',
    nearbyPlaces: ['Hanthana', 'Knuckles Conservation Forest'],
  },
  {
    id: 105,
    title: 'Bentota Beach',
    name: 'Bentota',
    description: 'Popular southwest beach destination with water sports and resorts.',
    category: 'Beaches',
    district: 'Galle',
    image: 'https://www.suryalanka.com/wp-content/uploads/2020/07/bentota-beach.jpg',
    images: [
      'https://www.suryalanka.com/wp-content/uploads/2020/07/bentota-beach.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt_tNE78do2ecDM_y6VV1cqLXSDmvfPqkqSw&s'
    ],
    rating: 4.5,
    location: { latitude: 6.4255, longitude: 80.0226 },
    entryFee: 'Free',
    timings: 'Open 24/7',
    bestTimeToVisit: 'November to April',
    howToReach: 'Drive from Colombo or Galle',
    nearbyPlaces: ['Kosgoda Turtle Hatchery', 'Ahangama'],
  },
  {
    id: 106,
    title: 'Dambulla Cave Temple',
    name: 'Dambulla',
    description: 'Large cave temple complex with ancient Buddha statues and vivid murals.',
    category: 'Cultural Sites',
    district: 'Matale',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/71/34/6b/caption.jpg?w=800&h=-1&s=1',
    images: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/71/34/6b/caption.jpg?w=800&h=-1&s=1'
    ],
    rating: 4.6,
    location: { latitude: 7.8562, longitude: 80.6520 },
    entryFee: 'USD 10 approx',
    timings: '7:30 AM - 7:00 PM',
    bestTimeToVisit: 'Year round',
    howToReach: 'Drive from Dambulla town',
    nearbyPlaces: ['Sigiriya', 'Minneriya'],
  },
  {
    id: 107,
    title: 'Nine Arch Bridge',
    name: 'Ella Nine Arch Bridge',
    description: 'Iconic colonial-era railway viaduct surrounded by tea plantations.',
    category: 'Scenic',
    district: 'Badulla',
    image: 'https://www.orienthotelsl.com/wp-content/uploads/2023/01/Nine-Arch-Bridge-Ella-1200x630-1.jpg',
    images: [
      'https://www.travelwithhussain.com/wp-content/uploads/2024/11/9-arch-brigde-ella.jpg'
    ],
    rating: 4.7,
    location: { latitude: 6.8810, longitude: 81.0445 },
    entryFee: 'Free',
    timings: 'Anytime (best early morning)',
    bestTimeToVisit: 'December to March',
    howToReach: 'Short walk from Ella town',
    nearbyPlaces: ['Ella Rock', 'Little Adam\'s Peak'],
  },
];
// Async actions
export const fetchDestinations = () => async (dispatch) => {
  try {
    dispatch(fetchDestinationsStart());
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Use mock data (replace with actual API call)
    dispatch(fetchDestinationsSuccess(mockDestinations));
  } catch (error) {
    dispatch(fetchDestinationsFailure('Failed to fetch destinations'));
  }
};

export default destinationsSlice.reducer;