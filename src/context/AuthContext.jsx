import { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';
import { addToCart } from '../services/cart';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user information
  const [loading, setLoading] = useState(true); // Track loading state
  const [cart, setCart] = useState(null);
  // const navigate = useNavigate();

  const fetchCart = async () => {
    try {
      const cartData = await api.get(`/cart/${user?._id}`);
      setCart(cartData);
    } catch (error) {
      console.error("Can not get user's cart: ", error);
    }
  };
  // Fetch the user's profile on app load
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // TODO : create backend route + controller to fetch user infomation.
        const response = await api.get('/user/auth/profile');
        setUser(response.data.user); // Restore user state
      } catch (err) {
        console.error('Not authenticated:', err);
        setUser(null); // Clear user state if not authenticated
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchProfile();
    fetchCart();
  }, []);

  const login = (userData) => {
    setUser(userData); // Save user info in the context
    // navigate('/'); // Redirect to main page after login
  };

  const logout = async () => {
    try {
      await api.post('/mongo/auth/logout');
      setUser(null);
      // navigate('/login'); // Redirect to login page after logout
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while restoring session
  }

  const addItemToCart = async (itemObj) => {
    try {
      if (!user?._id) {
        console.error("User not logged in.");
        return;
      }
      // Assuming addToCart service function exists and updates the cart on the backend
      const updatedCart = await addToCart(user._id, itemObj);
      console.log(updatedCart);
      setCart(updatedCart);
    } catch (error) {
      console.error("Error adding item to cart: ", error);
    }
  };

  return <AuthContext.Provider value={{ user, setUser, login, logout, loading, cart, addItemToCart }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
