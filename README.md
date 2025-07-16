
## TravelLog Slider (React Project)

This is a simple, elegant image slider built using **React**, designed for a travel-themed website called **TravelLog**. The slider automatically cycles through travel destinations, with manual navigation via arrows. A sidebar navigation menu is also included for basic site navigation.


### Features

*  Auto-sliding travel destinations every 4 seconds
*  Manual left/right navigation using custom arrow icons
*  Responsive layout with a toggleable sidebar
*  Smooth transitions and clean UI

### Project Structure

```plaintext
src/
├── App.js                 # Main component with slider logic
├── App.css               # Styling for the slider & layout
├── Navbar/
│   ├── Navbar.jsx        # Top navigation bar
│   └── Sidebar.jsx       # Sidebar component
├── Icons.jsx             # Custom SVG icons for arrows, hamburger, etc.
├── travelData.js         # Static travel data (images, text)
```

### Getting Started

1. **Clone the repo**


git clone https://github.com/yourusername/travellog-slider.git
cd travellog-slider


2. **Install dependencies**

npm install

3. **Start the app**

npm start

### How It Works

* The slider uses React `useState` and `useEffect` to manage the index and auto-rotation.
* `travelData.js` holds the slide content (image URL, country name, description).
* Arrows allow manual navigation.
* The `Navbar` includes a hamburger icon that toggles a sidebar with links.

###  Tech Stack

* React
* JavaScript (ES6)
* CSS Modules / Plain CSS
* No external libraries
