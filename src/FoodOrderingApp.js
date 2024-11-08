// // // import React, { useState } from 'react';

// // // const FoodOrderingApp = () => {
// // //   const [cart, setCart] = useState([]);

// // //   const categories = [
// // //     { name: "Sea food", icon: "🦐" },
// // //     { name: "Fast food", icon: "🍔" },
// // //     { name: "Pizza", icon: "🍕" },
// // //     { name: "Drinks", icon: "🥤" },
// // //     { name: "Orange juice", icon: "🍊" }
// // //   ];

// // //   const menuItems = [
// // //     {
// // //       id: 1,
// // //       name: "Hamburger",
// // //       price: 120.00,
// // //       image: "/image/hamburger.png"
// // //     },
// // //     {
// // //       id: 2,
// // //       name: "Grilled squid satay",
// // //       price: 125.00,
// // //       image: "/image/tea.png"
// // //     },
// // //     {
// // //       id: 3,
// // //       name: "Grilled squid satay",
// // //       price: 125.00,
// // //       image: "/image/tea.png"
// // //     },
// // //     {
// // //       id: 4,
// // //       name: "Grilled squid satay",
// // //       price: 125.00,
// // //       image: "/image/mixao.png"
// // //     },
// // //     {
// // //       id: 5,
// // //       name: "Grilled squid satay",
// // //       price: 125.00,
// // //       image: "/image/tea.png"
// // //     },
// // //     {
// // //       id: 6,
// // //       name: "Grilled squid satay",
// // //       price: 125.00,
// // //       image: "/image/juice.png"
// // //     }
// // //   ];

// // //   const addToCart = (item) => {
// // //     const existingItem = cart.find(i => i.id === item.id);
// // //     if (existingItem) {
// // //       setCart(cart.map(i =>
// // //         i.id === item.id
// // //           ? {...i, quantity: i.quantity + 1}
// // //           : i
// // //       ));
// // //     } else {
// // //       setCart([...cart, {...item, quantity: 1}]);
// // //     }
// // //   };

// // //   const updateQuantity = (itemId, delta) => {
// // //     setCart(cart.map(item => {
// // //       if (item.id === itemId) {
// // //         const newQuantity = Math.max(0, item.quantity + delta);
// // //         return {...item, quantity: newQuantity};
// // //       }
// // //       return item;
// // //     }).filter(item => item.quantity > 0));
// // //   };

// // //   const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

// // //   return (
// // //     <div style={{ display: 'flex', height: '100vh' }}>
// // //       {/* Left Panel */}
// // //       <div style={{ width: '66%', padding: '1rem', backgroundColor: '#f9fafb' }}>
// // //         <div style={{ marginBottom: '1.5rem' }}>
// // //           <button style={{ color: '#2563eb', border: 'none', background: 'none', cursor: 'pointer' }}>
// // //             🏠 Back to home
// // //           </button>
// // //         </div>

// // //         {/* Categories */}
// // //         <div style={{ position: 'relative', marginBottom: '2rem' }}>
// // //           <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto' }}>
// // //             {categories.map((category, index) => (
// // //               <div
// // //                 key={index}
// // //                 style={{
// // //                   width: '6rem',
// // //                   height: '6rem',
// // //                   flexShrink: 0,
// // //                   border: '1px solid #e5e7eb',
// // //                   borderRadius: '0.5rem',
// // //                   display: 'flex',
// // //                   flexDirection: 'column',
// // //                   alignItems: 'center',
// // //                   justifyContent: 'center',
// // //                   cursor: 'pointer',
// // //                   backgroundColor: 'white'
// // //                 }}
// // //               >
// // //                 <span style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{category.icon}</span>
// // //                 <span style={{ fontSize: '0.875rem' }}>{category.name}</span>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Menu Grid */}
// // //         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
// // //           {menuItems.map((item) => (
// // //             <div
// // //               key={item.id}
// // //               style={{
// // //                 border: '1px solid #e5e7eb',
// // //                 borderRadius: '0.5rem',
// // //                 padding: '1rem',
// // //                 backgroundColor: 'white'
// // //               }}
// // //             >
// // //               <img
// // //                 src={item.image}
// // //                 alt={item.name}
// // //                 style={{
// // //                   width: '100%',
// // //                   height: '8rem',
// // //                   objectFit: 'cover',
// // //                   borderRadius: '0.5rem',
// // //                   marginBottom: '0.75rem'
// // //                 }}
// // //               />
// // //               <h3 style={{ fontWeight: 500, marginBottom: '0.5rem' }}>{item.name}</h3>
// // //               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
// // //                 <span style={{ color: '#ef4444' }}>Kr {item.price.toFixed(2)}</span>
// // //                 <button
// // //                   onClick={() => addToCart(item)}
// // //                   style={{
// // //                     backgroundColor: '#ef4444',
// // //                     color: 'white',
// // //                     border: 'none',
// // //                     borderRadius: '50%',
// // //                     width: '1.5rem',
// // //                     height: '1.5rem',
// // //                     cursor: 'pointer'
// // //                   }}
// // //                 >
// // //                   +
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       {/* Right Panel - Cart */}
// // //       <div style={{ width: '34%', padding: '1rem', borderLeft: '1px solid #e5e7eb', backgroundColor: 'white' }}>
// // //         <div style={{ marginBottom: '1.5rem' }}>
// // //           <h2 style={{ fontSize: '1.125rem', fontWeight: 500 }}>
// // //             🛒 Your Cart ({cart.length})
// // //           </h2>
// // //         </div>

// // //         <div style={{ marginBottom: '2rem' }}>
// // //           {cart.map((item) => (
// // //             <div
// // //               key={item.id}
// // //               style={{
// // //                 display: 'flex',
// // //                 justifyContent: 'space-between',
// // //                 alignItems: 'center',
// // //                 marginBottom: '1rem'
// // //               }}
// // //             >
// // //               <div style={{ display: 'flex', alignItems: 'center' }}>
// // //                 <img
// // //                   src={item.image}
// // //                   alt={item.name}
// // //                   style={{
// // //                     width: '3rem',
// // //                     height: '3rem',
// // //                     objectFit: 'cover',
// // //                     borderRadius: '0.25rem',
// // //                     marginRight: '0.75rem'
// // //                   }}
// // //                 />
// // //                 <div>
// // //                   <h3 style={{ fontWeight: 500 }}>{item.name}</h3>
// // //                   <span style={{ color: '#ef4444' }}>Kr {item.price.toFixed(2)}</span>
// // //                 </div>
// // //               </div>
// // //               <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
// // //                 <button
// // //                   onClick={() => updateQuantity(item.id, -1)}
// // //                   style={{
// // //                     padding: '0.25rem 0.5rem',
// // //                     border: '1px solid #e5e7eb',
// // //                     borderRadius: '0.25rem',
// // //                     backgroundColor: 'white',
// // //                     cursor: 'pointer'
// // //                   }}
// // //                 >
// // //                   -
// // //                 </button>
// // //                 <span>{item.quantity}</span>
// // //                 <button
// // //                   onClick={() => updateQuantity(item.id, 1)}
// // //                   style={{
// // //                     padding: '0.25rem 0.5rem',
// // //                     border: '1px solid #e5e7eb',
// // //                     borderRadius: '0.25rem',
// // //                     backgroundColor: 'white',
// // //                     cursor: 'pointer'
// // //                   }}
// // //                 >
// // //                   +
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
// // //           <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
// // //             <span style={{ fontWeight: 500 }}>Total:</span>
// // //             <span style={{ color: '#ef4444', fontWeight: 500 }}>Kr {total.toFixed(2)}</span>
// // //           </div>
// // //           <button
// // //             style={{
// // //               width: '100%',
// // //               backgroundColor: '#ef4444',
// // //               color: 'white',
// // //               padding: '0.75rem',
// // //               borderRadius: '0.5rem',
// // //               border: 'none',
// // //               fontWeight: 500,
// // //               cursor: 'pointer'
// // //             }}
// // //           >
// // //             PAYMENT
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default FoodOrderingApp;

// // import React, { useState } from 'react';

// // const FoodOrderingApp = () => {
// //   const [cart, setCart] = useState([]);

// //   const categories = [
// //     { name: "Sea food", icon: "🦐" },
// //     { name: "Fast food", icon: "🍔" },
// //     { name: "Pizza", icon: "🍕" },
// //     { name: "Drinks", icon: "🥤" },
// //     { name: "Orange juice", icon: "🍊" },
// //     { name: "Orange juice", icon: "🍊" },
// //     { name: "Orange juice", icon: "🍊" },
// //     { name: "Orange juice", icon: "🍊" },
// //     { name: "Orange juice", icon: "🍊" },
// //     { name: "Orange juice", icon: "🍊" },
// //     { name: "Orange juice", icon: "🍊" },

// //   ];

// //   const menuItems = [
// //     { id: 1, name: "Hamburger", price: 120.00, image: "image/hamburger.png" },
// //     { id: 2, name: "Grilled squid satay", price: 125.00, image: "/image/tea.png" },
// //     { id: 3, name: "Grilled squid satay", price: 125.00, image: "/image/tea.png" },
// //     { id: 4, name: "Grilled squid satay", price: 125.00, image: "/image/mixao.png" },
// //     { id: 5, name: "Grilled squid satay", price: 125.00, image: "/image/tea.png" },
// //     { id: 6, name: "Grilled squid satay", price: 125.00, image: "/image/juice.png" }
// //   ];

// //   const addToCart = (item) => {
// //     const existingItem = cart.find(i => i.id === item.id);
// //     if (existingItem) {
// //       setCart(cart.map(i =>
// //         i.id === item.id
// //           ? {...i, quantity: i.quantity + 1}
// //           : i
// //       ));
// //     } else {
// //       setCart([...cart, {...item, quantity: 1}]);
// //     }
// //   };

// //   const updateQuantity = (itemId, delta) => {
// //     setCart(cart.map(item => {
// //       if (item.id === itemId) {
// //         const newQuantity = Math.max(0, item.quantity + delta);
// //         return {...item, quantity: newQuantity};
// //       }
// //       return item;
// //     }).filter(item => item.quantity > 0));
// //   };

// //   const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

// //   return (
// //     <div style={{ display: 'flex', height: '100vh' }}>
// //       {/* Left Panel */}
// //       <div style={{ width: '66%', padding: '1rem', backgroundColor: '#f9fafb' }}>
// //         <div style={{ marginBottom: '1.5rem' }}>
// //           <button style={{ color: '#2563eb', border: 'none', background: 'none', cursor: 'pointer' }}>
// //             🏠 Back to home
// //           </button>
// //         </div>

// //         {/* Categories */}
// //         <div style={{ position: 'relative', marginBottom: '2rem' }}>
// //           <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto' }}>
// //             {categories.map((category, index) => (
// //               <div
// //                 key={index}
// //                 style={{
// //                   width: '6rem',
// //                   height: '6rem',
// //                   flexShrink: 0,
// //                   border: '1px solid #e5e7eb',
// //                   borderRadius: '0.5rem',
// //                   display: 'flex',
// //                   flexDirection: 'column',
// //                   alignItems: 'center',
// //                   justifyContent: 'center',
// //                   cursor: 'pointer',
// //                   backgroundColor: 'white'
// //                 }}
// //               >
// //                 <span style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{category.icon}</span>
// //                 <span style={{ fontSize: '0.875rem' }}>{category.name}</span>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Menu Grid */}
// //         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
// //           {menuItems.map((item) => (
// //             <div
// //               key={item.id}
// //               style={{
// //                 border: '1px solid #e5e7eb',
// //                 borderRadius: '0.5rem',
// //                 padding: '1rem',
// //                 backgroundColor: 'white'
// //               }}
// //             >
// //               <img
// //                 src={item.image}
// //                 alt={item.name}
// //                 style={{
// //                   width: '100%',           // Chiếm toàn bộ chiều rộng của ô
// //                   height: '10rem',         // Đặt chiều cao cố định cho ảnh
// //                   objectFit: 'cover',      // Đảm bảo ảnh vừa khít mà không bị giãn méo
// //                   borderRadius: '0.5rem',
// //                   marginBottom: '0.75rem'
// //                 }}
// //               />
// //               <h3 style={{ fontWeight: 500, marginBottom: '0.5rem' }}>{item.name}</h3>
// //               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
// //                 <span style={{ color: '#ef4444' }}>Kr {item.price.toFixed(2)}</span>
// //                 <button
// //                   onClick={() => addToCart(item)}
// //                   style={{
// //                     backgroundColor: '#ef4444',
// //                     color: 'white',
// //                     border: 'none',
// //                     borderRadius: '50%',
// //                     width: '1.5rem',
// //                     height: '1.5rem',
// //                     cursor: 'pointer'
// //                   }}
// //                 >
// //                   +
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Right Panel - Cart */}
// //       <div style={{ width: '34%', padding: '1rem', borderLeft: '1px solid #e5e7eb', backgroundColor: 'white' }}>
// //         <div style={{ marginBottom: '1.5rem' }}>
// //           <h2 style={{ fontSize: '1.125rem', fontWeight: 500 }}>
// //             🛒 Your Cart ({cart.length})
// //           </h2>
// //         </div>

// //         <div style={{ marginBottom: '2rem' }}>
// //           {cart.map((item) => (
// //             <div
// //               key={item.id}
// //               style={{
// //                 display: 'flex',
// //                 justifyContent: 'space-between',
// //                 alignItems: 'center',
// //                 marginBottom: '1rem'
// //               }}
// //             >
// //               <div style={{ display: 'flex', alignItems: 'center' }}>
// //                 <img
// //                   src={item.image}
// //                   alt={item.name}
// //                   style={{
// //                     width: '3rem',
// //                     height: '3rem',
// //                     objectFit: 'cover',
// //                     borderRadius: '0.25rem',
// //                     marginRight: '0.75rem'
// //                   }}
// //                 />
// //                 <div>
// //                   <h3 style={{ fontWeight: 500 }}>{item.name}</h3>
// //                   <span style={{ color: '#ef4444' }}>Kr {item.price.toFixed(2)}</span>
// //                 </div>
// //               </div>
// //               <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
// //                 <button
// //                   onClick={() => updateQuantity(item.id, -1)}
// //                   style={{
// //                     padding: '0.25rem 0.5rem',
// //                     border: '1px solid #e5e7eb',
// //                     borderRadius: '0.25rem',
// //                     backgroundColor: 'white',
// //                     cursor: 'pointer'
// //                   }}
// //                 >
// //                   -
// //                 </button>
// //                 <span>{item.quantity}</span>
// //                 <button
// //                   onClick={() => updateQuantity(item.id, 1)}
// //                   style={{
// //                     padding: '0.25rem 0.5rem',
// //                     border: '1px solid #e5e7eb',
// //                     borderRadius: '0.25rem',
// //                     backgroundColor: 'white',
// //                     cursor: 'pointer'
// //                   }}
// //                 >
// //                   +
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
// //           <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
// //             <span style={{ fontWeight: 500 }}>Total:</span>
// //             <span style={{ color: '#ef4444', fontWeight: 500 }}>Kr {total.toFixed(2)}</span>
// //           </div>
// //           <button
// //             style={{
// //               width: '100%',
// //               backgroundColor: '#ef4444',
// //               color: 'white',
// //               padding: '0.75rem',
// //               borderRadius: '0.5rem',
// //               border: 'none',
// //               fontWeight: 500,
// //               cursor: 'pointer'
// //             }}
// //           >
// //             PAYMENT
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FoodOrderingApp;

// import React, { useState, useRef } from 'react';

// const FoodOrderingApp = () => {
//   const [cart, setCart] = useState([]);

//   // Dùng useRef để tham chiếu đến thanh danh mục
//   const categoryRef = useRef(null);

//   const categories = [
//     { name: "Sea food", icon: "🦐" },
//     { name: "Fast food", icon: "🍔" },
//     { name: "Pizza", icon: "🍕" },
//     { name: "Drinks", icon: "🥤" },
//     { name: "Orange juice", icon: "🍊" },
//     { name: "Cupcake", icon: "🧁" },
//     { name: "Juice", icon: "🥤" },
//     { name: "Coca", icon: "🥤" },
//     { name: "Pepsi", icon: "🥤" },
//     { name: "Milk", icon: "🥤" },
//     { name: "Tea", icon: "🍵" },
//     { name: "Coffee", icon: "☕" },
//     { name: "Ice cream", icon: "🍦" },
//     { name: "Cake", icon: "🍰" },
//   ];

//   const menuItems = [
//     { id: 1, name: "Hamburger", price: 120.00, image: "image/hamburger.png" },
//     { id: 2, name: "Grilled squid satay", price: 125.00, image: "/image/tea.png" },
//     { id: 3, name: "Grilled squid satay", price: 125.00, image: "/image/tea.png" },
//     { id: 4, name: "Grilled squid satay", price: 125.00, image: "/image/mixao.png" },
//     { id: 5, name: "Grilled squid satay", price: 125.00, image: "/image/tea.png" },
//     { id: 6, name: "Grilled squid satay", price: 125.00, image: "/image/juice.png" }
//   ];

//   const addToCart = (item) => {
//     const existingItem = cart.find(i => i.id === item.id);
//     if (existingItem) {
//       setCart(cart.map(i =>
//         i.id === item.id
//           ? {...i, quantity: i.quantity + 1}
//           : i
//       ));
//     } else {
//       setCart([...cart, {...item, quantity: 1}]);
//     }
//   };

//   const updateQuantity = (itemId, delta) => {
//     setCart(cart.map(item => {
//       if (item.id === itemId) {
//         const newQuantity = Math.max(0, item.quantity + delta);
//         return {...item, quantity: newQuantity};
//       }
//       return item;
//     }).filter(item => item.quantity > 0));
//   };

//   const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

//   // Điều hướng sang trái
//   const scrollLeft = () => {
//     categoryRef.current.scrollBy({ left: -200, behavior: 'smooth' });
//   };

//   // Điều hướng sang phải
//   const scrollRight = () => {
//     categoryRef.current.scrollBy({ left: 200, behavior: 'smooth' });
//   };

//   return (
//     <div style={{ display: 'flex', height: '100vh' }}>
//       {/* Left Panel */}
//       <div style={{ width: '66%', padding: '1rem', backgroundColor: '#f9fafb' }}>
//         <div style={{ marginBottom: '1.5rem' }}>
//           <button style={{ color: '#2563eb', border: 'none', background: 'none', cursor: 'pointer' }}>
//             🏠 Back to home
//           </button>
//         </div>

//         {/* Categories */}
//         <div style={{ position: 'relative', marginBottom: '2rem' }}>
//           <button
//             onClick={scrollLeft}
//             style={{
//               position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 1,
//               background: 'none', border: 'none', cursor: 'pointer', fontSize: '2rem'
//             }}>
//             ◀️
//           </button>
//           <div
//             ref={categoryRef}
//             style={{ display: 'flex', gap: '1rem', overflowX: 'hidden', padding: '0 2rem' }}
//           >
//             {categories.map((category, index) => (
//               <div
//                 key={index}
//                 style={{
//                   width: '6rem',
//                   height: '6rem',
//                   flexShrink: 0,
//                   border: '1px solid #e5e7eb',
//                   borderRadius: '0.5rem',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   cursor: 'pointer',
//                   backgroundColor: 'white'
//                 }}
//               >
//                 <span style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{category.icon}</span>
//                 <span style={{ fontSize: '0.875rem' }}>{category.name}</span>
//               </div>
//             ))}
//           </div>
//           <button
//             onClick={scrollRight}
//             style={{
//               position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 1,
//               background: 'none', border: 'none', cursor: 'pointer', fontSize: '2rem'
//             }}>
//             ▶️
//           </button>
//         </div>

//         {/* Menu Grid */}
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
//           {menuItems.map((item) => (
//             <div
//               key={item.id}
//               style={{
//                 border: '1px solid #e5e7eb',
//                 borderRadius: '0.5rem',
//                 padding: '1rem',
//                 backgroundColor: 'white'
//               }}
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 style={{
//                   width: '100%',
//                   height: '10rem',
//                   objectFit: 'cover',
//                   borderRadius: '0.5rem',
//                   marginBottom: '0.75rem'
//                 }}
//               />
//               <h3 style={{ fontWeight: 500, marginBottom: '0.5rem' }}>{item.name}</h3>
//               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                 <span style={{ color: '#ef4444' }}>Kr {item.price.toFixed(2)}</span>
//                 <button
//                   onClick={() => addToCart(item)}
//                   style={{
//                     backgroundColor: '#ef4444',
//                     color: 'white',
//                     border: 'none',
//                     borderRadius: '50%',
//                     width: '1.5rem',
//                     height: '1.5rem',
//                     cursor: 'pointer'
//                   }}
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Panel - Cart */}
//       <div style={{ width: '34%', padding: '1rem', borderLeft: '1px solid #e5e7eb', backgroundColor: 'white' }}>
//         <div style={{ marginBottom: '1.5rem' }}>
//           <h2 style={{ fontSize: '1.125rem', fontWeight: 500 }}>
//             🛒 Your Cart ({cart.length})
//           </h2>
//         </div>

//         <div style={{ marginBottom: '2rem' }}>
//           {cart.map((item) => (
//             <div
//               key={item.id}
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 marginBottom: '1rem'
//               }}
//             >
//               <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   style={{
//                     width: '3rem',
//                     height: '3rem',
//                     objectFit: 'cover',
//                     borderRadius: '0.25rem',
//                     marginRight: '0.75rem'
//                   }}
//                 />
//                 <div>
//                   <h3 style={{ fontWeight: 500 }}>{item.name}</h3>
//                   <span style={{ color: '#ef4444' }}>Kr {item.price.toFixed(2)}</span>
//                 </div>
//               </div>
//               <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
//                 <button
//                   onClick={() => updateQuantity(item.id, -1)}
//                   style={{
//                     padding: '0.25rem 0.5rem',
//                     border: '1px solid #e5e7eb',
//                     borderRadius: '0.25rem',
//                     backgroundColor: 'white',
//                     cursor: 'pointer'
//                   }}
//                 >
//                   -
//                 </button>
//                 <span>{item.quantity}</span>
//                 <button
//                   onClick={() => updateQuantity(item.id, 1)}
//                   style={{
//                     padding: '0.25rem 0.5rem',
//                     border: '1px solid #e5e7eb',
//                     borderRadius: '0.25rem',
//                     backgroundColor: 'white',
//                     cursor: 'pointer'
//                   }}
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
//           <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
//             <span style={{ fontWeight: 500 }}>Total:</span>
//             <span style={{ color: '#ef4444', fontWeight: 500 }}>Kr {total.toFixed(2)}</span>
//           </div>
//           <button
//             style={{
//               width: '100%',
//               backgroundColor: '#ef4444',
//               color: 'white',
//               padding: '0.75rem',
//               borderRadius: '0.5rem',
//               border: 'none',
//               fontWeight: 500,
//               cursor: 'pointer'
//             }}
//           >
//             PAYMENT
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FoodOrderingApp;

import React, { useState, useRef } from "react";
import AddToCartModal from "./AddToCardModal";
const FoodOrderingApp = () => {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [item, setItem] = useState(null);

  const updateModal = (item) => {
    setItem(item);
    setShowModal(!showModal);
  };

  // Dùng useRef để tham chiếu đến thanh danh mục
  const categoryRef = useRef(null);

  const categories = [
    { name: "Sea food", icon: "🦐" },
    { name: "Fast food", icon: "🍔" },
    { name: "Pizza", icon: "🍕" },
    { name: "Drinks", icon: "🥤" },
    { name: "Orange juice", icon: "🍊" },
    { name: "Cupcake", icon: "🧁" },
    { name: "Juice", icon: "🥤" },
    { name: "Coca", icon: "🥤" },
    { name: "Pepsi", icon: "🥤" },
    { name: "Milk", icon: "🥤" },
    { name: "Tea", icon: "🍵" },
    { name: "Coffee", icon: "☕" },
    { name: "Ice cream", icon: "🍦" },
    { name: "Cake", icon: "🍰" },
  ];

  const menuItems = [
    { id: 1, name: "Hamburger", price: 120.0, image: "image/hamburger.png" },
    {
      id: 2,
      name: "Grilled squid satay",
      price: 125.0,
      image: "/image/tea.png",
    },
    {
      id: 3,
      name: "Grilled squid satay",
      price: 125.0,
      image: "/image/tea.png",
    },
    {
      id: 4,
      name: "Grilled squid satay",
      price: 125.0,
      image: "/image/mixao.png",
    },
    {
      id: 5,
      name: "Grilled squid satay",
      price: 125.0,
      image: "/image/tea.png",
    },
    {
      id: 6,
      name: "Grilled squid satay",
      price: 125.0,
      image: "/image/juice.png",
    },
  ];

  const addToCart = (item) => {
    const existingItem = cart.find((i) => i.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (itemId, delta) => {
    setCart(
      cart
        .map((item) => {
          if (item.id === itemId) {
            const newQuantity = Math.max(0, item.quantity + delta);
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Điều hướng sang trái
  const scrollLeft = () => {
    categoryRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  // Điều hướng sang phải
  const scrollRight = () => {
    categoryRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Left Panel */}
      {showModal && (
        <AddToCartModal
          item={item}
          onClose={updateModal}
          onAddToCart={addToCart}
        />
      )}
      <div
        style={{ width: "66%", padding: "1rem", backgroundColor: "#f9fafb" }}
      >
        <div style={{ marginBottom: "1.5rem" }}>
          <button
            style={{
              color: "#2563eb",
              border: "2px solid #2563eb", // Thêm viền
              backgroundColor: "white", // Màu nền
              cursor: "pointer",
              padding: "0.5rem 1rem", // Thêm padding
              borderRadius: "0.5rem", // Bo góc
              fontWeight: "bold", // Làm nổi bật chữ
            }}
          >
            🏠 Back to home
          </button>
        </div>
        {/* Categories */}
        <div
          style={{
            marginBottom: "2rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <button
            onClick={scrollLeft}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "2rem",
              marginRight: "1rem",
            }}
          >
            ◀️
          </button>
          <div
            ref={categoryRef}
            style={{
              display: "flex",
              gap: "1rem",
              overflowX: "hidden",
              flexGrow: 1,
            }}
          >
            {categories.map((category, index) => (
              <div
                key={index}
                style={{
                  width: "6rem",
                  height: "6rem",
                  flexShrink: 0,
                  border: "1px solid #e5e7eb",
                  borderRadius: "0.5rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  backgroundColor: "white",
                }}
              >
                <span style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                  {category.icon}
                </span>
                <span style={{ fontSize: "0.875rem" }}>{category.name}</span>
              </div>
            ))}
          </div>
          <button
            onClick={scrollRight}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "2rem",
              marginLeft: "1rem",
            }}
          >
            ▶️
          </button>
        </div>

        {/* Menu Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
          }}
        >
          {menuItems.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "0.5rem",
                padding: "1rem",
                backgroundColor: "white",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "10rem",
                  objectFit: "cover",
                  borderRadius: "0.5rem",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontWeight: 500, marginBottom: "0.5rem" }}>
                {item.name}
              </h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ color: "#ef4444" }}>
                  Kr {item.price.toFixed(2)}
                </span>
                <button
                  onClick={() => updateModal(item)}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src="/image/add.png"
                    alt="Add to cart"
                    style={{ width: "1.5rem", height: "1.5rem" }}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Right Panel - Cart */}
      <div
        style={{
          width: "34%",
          padding: "1rem",
          borderLeft: "1px solid #e5e7eb",
          backgroundColor: "white",
        }}
      >
        <div style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.125rem", fontWeight: 500 }}>
            🛒 Your Cart ({cart.length})
          </h2>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "3rem",
                    height: "3rem",
                    objectFit: "cover",
                    borderRadius: "0.25rem",
                    marginRight: "0.75rem",
                  }}
                />
                <div>
                  <h3 style={{ fontWeight: 500 }}>{item.name}</h3>
                  <span style={{ color: "#ef4444" }}>
                    Kr {item.price.toFixed(2)}
                  </span>
                </div>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  style={{
                    padding: "0.25rem 0.5rem",
                    border: "1px solid #e5e7eb",
                    borderRadius: "0.25rem",
                    backgroundColor: "white",
                    cursor: "pointer",
                  }}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  style={{
                    padding: "0.25rem 0.5rem",
                    border: "1px solid #e5e7eb",
                    borderRadius: "0.25rem",
                    backgroundColor: "white",
                    cursor: "pointer",
                  }}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: "1rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <span style={{ fontWeight: 500 }}>Total:</span>
            <span style={{ color: "#ef4444", fontWeight: 500 }}>
              Kr {total.toFixed(2)}
            </span>
          </div>
          <button
            style={{
              width: "100%",
              backgroundColor: "#ef4444",
              color: "white",
              padding: "0.75rem",
              borderRadius: "0.5rem",
              border: "none",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            PAYMENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodOrderingApp;
