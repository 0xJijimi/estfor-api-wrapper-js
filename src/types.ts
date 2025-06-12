export interface Action {
  id: string;
  actionId: string;
  // Add other properties as needed based on the API response
  [key: string]: any;
} 