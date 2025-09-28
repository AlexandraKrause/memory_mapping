# Interactive Memory Map

An interactive web application for mapping and visualizing personal memories on a custom map interface.
The application can be used for roleplay or travelling, as well as for teaching.

## Features

- **Interactive Memory Dots**: Click on any memory marker to view detailed information
- **Custom Map Background**: Use any map image as your background
- **Responsive Design**: Works on desktop and mobile devices
- **Popup Details**: Rich memory details with descriptions and personal notes
- **Keyboard Navigation**: Press ESC to close popups
- **Click Outside to Close**: Click anywhere outside the popup to close

## Files Structure

```
memory-map/
├── memory-map.html          # Main interactive map page
├── memory-data.js           # Memory location data
├── map.png                  # Your background map image (optional)
└── README.md               # This file
```

## Quick Start

1. **Download the files**: Save `memory-map.html` and `memory-data.js` in the same folder

2. **Add your map background** (optional): Place your map image as `map.png` in the same folder, or update the CSS background reference

3. **Customize your memory data**: Edit `memory-data.js` to replace the placeholder data with your actual locations and memories

4. **Open in browser**: Double-click `memory-map.html` to open in your web browser

## Customizing Your Memory Data

Edit the `memoryData` array in `memory-data.js`. Each memory location should have:

```javascript
{
  title: 'Location Name',
  type: 'location_type',        // landmark, city, nature_spot, etc.
  date: 'my_date',              // Replace with your actual date
  description: 'What happened here',
  memories: [
    {
      type: 'text',             // 'text' or 'note'
      content: 'The actual memory or experience',
      caption: 'Additional context or reflection'
    }
  ]
}
```

### Example Location Types
- `landmark` - Famous locations, monuments
- `nature_spot` - Parks, forests, natural areas
- `city` - Urban locations, cities visited
- `historic_site` - Historical places, museums
- `restaurant` - Dining experiences
- `beach` - Coastal memories
- `mountain` - Mountain trips, hiking
- `park` - Local parks, recreational areas
- `museum` - Museums, galleries
- `airport` - Travel memories
- `monument` - Monuments, statues
- `event_venue` - Concert halls, venues
- `theater` - Shows, performances
- `art_gallery` - Art exhibitions
- `sports_venue` - Stadiums, sports events
- `arcade` - Gaming locations
- `competition_venue` - Competitions, contests
- `concert_hall` - Music performances
- `scenic_viewpoint` - Beautiful views, overlooks
- `home` - Home locations
- `achievement_location` - Places of personal achievement

## Customizing Memory Dot Positions

Memory dots are positioned using SVG coordinates in the HTML file. To adjust positions:

1. Find the memory dot in `memory-map.html` (search for `onclick="showMemory(X)"`)
2. Modify the `cx` and `cy` attributes to change position
3. The coordinate system is 800x600 units (adjust `viewBox` if needed)

Example:
```html
<circle class="memory-dot" cx="500" cy="400" r="12" 
        fill="#FF6B47" stroke="#8B4513" stroke-width="2" 
        onclick="showMemory(0)" />
```

## Customization Options

### Change Colors
Edit the CSS color values in the `<style>` section of `memory-map.html`:
- Memory dot colors: `fill="#FF6B47"`
- Popup background: `background: linear-gradient(...)`
- Border colors: `border: 2px solid #8b4513`

### Change Background Map
Replace the background image reference in the CSS:
```css
background: url("your-map-image.jpg") no-repeat center center;
```

### Add More Memory Dots
1. Add a new memory location object to `memoryData` in `memory-data.js`
2. Add a corresponding SVG circle element in `memory-map.html`
3. Make sure the `onclick="showMemory(X)"` index matches the array position

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires JavaScript enabled

## Development

The application uses vanilla HTML, CSS, and JavaScript - no external dependencies required.


## Tips for Best Results

1. **Use high-quality map images** - PNG or JPG format works best
2. **Position dots thoughtfully** - Avoid overlapping markers
3. **Keep descriptions concise** - Long text works better in the memories section
4. **Use meaningful emojis** - Each dot can have a custom emoji icon

## License

This project is open source. Feel free to modify and adapt for your needs.

## Contributing

Found a bug or have a feature request? Feel free to submit issues or improvements!