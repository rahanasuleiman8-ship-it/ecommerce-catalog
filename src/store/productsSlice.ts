import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types';

interface ProductsState {
  items: Product[];
  filteredItems: Product[];
  categories: string[];
  selectedCategory: string;
  searchQuery: string;
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  items: [],
  filteredItems: [],
  categories: [],
  selectedCategory: 'all',
  searchQuery: '',
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk('products/fetchAll', async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) throw new Error('Failed to fetch products');
  return response.json() as Promise<Product[]>;
});

export const fetchCategories = createAsyncThunk('products/fetchCategories', async () => {
  const response = await fetch('https://fakestoreapi.com/products/categories');
  if (!response.ok) throw new Error('Failed to fetch categories');
  return response.json() as Promise<string[]>;
});

const applyFilters = (items: Product[], category: string, query: string): Product[] => {
  return items.filter((p) => {
    const matchesCategory = category === 'all' || p.category === category;
    const matchesSearch = p.title.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesSearch;
  });
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
      state.filteredItems = applyFilters(state.items, action.payload, state.searchQuery);
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.filteredItems = applyFilters(state.items, state.selectedCategory, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.filteredItems = applyFilters(action.payload, state.selectedCategory, state.searchQuery);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      });
  },
});

export const { setCategory, setSearchQuery } = productsSlice.actions;
export default productsSlice.reducer;