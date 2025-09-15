// src/utils/constants.js
export const TRANSPORT_OPTIONS = [
  { value: 'car', label: 'Car' },
  { value: 'bus', label: 'Bus' },
  { value: 'bike', label: 'Bike' },
  { value: 'train', label: 'Train' }
];

export const FOOD_OPTIONS = [
  { value: 'meat', label: 'Meat' },
  { value: 'vegetables', label: 'Vegetables' },
  { value: 'dairy', label: 'Dairy' },
  { value: 'grains', label: 'Grains' }
];

export const DEFAULT_ACTIVITY = {
  date: new Date().toISOString().split('T')[0], // Today's date
  transportation: 'car',
  transportDistanceKm: 0,
  energyConsumptionKwh: 0,
  foodType: 'meat',
  foodAmountKg: 0
};