/**
 * MEMORY MAP DATA
 * 
 * This file contains all the memory locations and associated memories
 * separated from the main application logic for better maintainability.
 * 
 * DATA STRUCTURE:
 * Each entry represents a significant location with associated memories
 * - title: Display name for the memory location
 * - type: Category of location (landmark, nature_spot, city, historic_site, etc.)
 * - date: When the location was visited or memory was created
 * - description: Brief summary of what happened at this location
 * - memories: Array of specific memories from that location
 *   - type: 'text' for regular memories, 'note' for personal notes
 *   - content: The actual memory content or experience
 *   - caption: Additional context or commentary
 * 
 * USAGE:
 * Include this file before the main HTML file:
 * <script src="memory-data.js"></script>
 * 
 * The memoryData array will be available globally
 */

const memoryData = [
 
  {
    title: 'my_location_name',
    type: 'landmark',
    date: 'my_date',
    description: 'Brief description of what happened at this location',
    memories: [
      { 
        type: 'text', 
        content: 'A memorable experience or event that happened here', 
        caption: 'Personal reflection or additional context' 
      },
      { 
        type: 'note', 
        content: 'Personal thoughts or observations about this place', 
        caption: 'Why this memory is significant' 
      }
    ]
  },
  {
    title: 'my_location_name',
    type: 'nature_spot',
    date: 'my_date',
    description: 'Brief description of what happened at this location',
    memories: [
      { 
        type: 'text', 
        content: 'A memorable experience or event that happened here', 
        caption: 'Personal reflection or additional context' 
      },
      { 
        type: 'note', 
        content: 'Personal thoughts or observations about this place', 
        caption: 'Why this memory is significant' 
      }
    ]
  },
  {
    title: 'my_location_name',
    type: 'city',
    date: 'my_date',
    description: 'Brief description of what happened at this location',
    memories: [
      { 
        type: 'text', 
        content: 'A memorable experience or event that happened here', 
        caption: 'Personal reflection or additional context' 
      },
      { 
        type: 'note', 
        content: 'Personal thoughts or observations about this place', 
        caption: 'Why this memory is significant' 
      }
    ]
  },
  {
    title: 'my_location_name',
    type: 'historic_site',
    date: 'my_date',
    description: 'Brief description of what happened at this location',
    memories: [
      { 
        type: 'text', 
        content: 'A memorable experience or event that happened here', 
        caption: 'Personal reflection or additional context' 
      },
      { 
        type: 'note', 
        content: 'Personal thoughts or observations about this place', 
        caption: 'Why this memory is significant' 
      }
    ]
  },
  {
    title: 'my_location_name',
    type: 'restaurant',
    date: 'my_date',
    description: 'Brief description of what happened at this location',
    memories: [
      { 
        type: 'text', 
        content: 'A memorable experience or event that happened here', 
        caption: 'Personal reflection or additional context' 
      },
      { 
        type: 'note', 
        content: 'Personal thoughts or observations about this place', 
        caption: 'Why this memory is significant' 
      }
    ]
  },
  {
    title: 'my_location_name',
    type: 'beach',
    date: 'my_date',
    description: 'Brief description of what happened at this location',
    memories: [
      { 
        type: 'text', 
        content: 'A memorable experience or event that happened here', 
        caption: 'Personal reflection or additional context' 
      },
      { 
        type: 'note', 
        content: 'Personal thoughts or observations about this place', 
        caption: 'Why this memory is significant' 
      }
    ]
  },
  {
    title: 'my_location_name',
    type: 'mountain',
    date: 'my_date',
    description: 'Brief description of what happened at this location',
    memories: [
      { 
        type: 'text', 
        content: 'A memorable experience or event that happened here', 
        caption: 'Personal reflection or additional context' 
      },
      { 
        type: 'note', 
        content: 'Personal thoughts or observations about this place', 
        caption: 'Why this memory is significant' 
      }
    ]
  },
  {
    title: 'my_location_name',
    type: 'park',
    date: 'my_date',
    description: 'Brief description of what happened at this location',
    memories: [
      { 
        type: 'text', 
        content: 'A memorable experience or event that happened here', 
        caption: 'Personal reflection or additional context' 
      },
      { 
        type: 'note', 
        content: 'Personal thoughts or observations about this place', 
        caption: 'Why this memory is significant' 
      }
    ]
  },
  {
    title: 'my_location_name',
    type: 'museum',
    date: 'my_date',
    description: 'Brief description of what happened at this location',
    memories: [
      { 
        type: 'text', 
        content: 'A memorable experience or event that happened here', 
        caption: 'Personal reflection or additional context' 
      },
      { 
        type: 'note', 
        content: 'Personal thoughts or observations about this place', 
        caption: 'Why this memory is significant' 
      }
    ]
  },
  {
    title: 'my_location_name',
    type: 'airport',
    date: 'my_date',
    description: 'Brief description of what happened at this location',
    memories: [
      { 
        type: 'text', 
        content: 'A memorable experience or event that happened here', 
        caption: 'Personal reflection or additional context' 
      },
      { 
        type: 'note', 
        content: 'Personal thoughts or observations about this place', 
        caption: 'Why this memory is significant' 
      }
    ]
  },
  {
    title: 'my_location_name',
    type: 'monument',
    date: 'my_date',
    description: 'Brief description of what happened at this location',
    memories: [
      { 
        type: 'text', 
        content: 'A memorable experience or event that happened here', 
        caption: 'Personal reflection or additional context' 
      },
      { 
        type: 'note', 
        content: 'Personal thoughts or observations about this place', 
        caption: 'Why this memory is significant' 
      }
    ]
  },
  {
    title: 'my_location_name',
    type: 'event_venue',
    date: 'my_date',
    description: 'Brief description of what happened at this location',
    memories: [
      { 
        type: 'text', 
        content: 'A memorable experience or event that happened here', 
        caption: 'Personal reflection or additional context' 
      },
      { 
        type: 'note', 
        content: 'Personal thoughts or observations about this place', 
        caption: 'Why this memory is significant' 
      }
    ]
  },
  {
    title: 'my_location_name',
    type: 'theater',
    date: 'my_date',
    description: 'Brief description of what happened at this location',
    memories: [
      { 
        type: 'text', 
        content: 'A memorable experience or event that happened here', 
        caption: 'Personal reflection or additional context' 
      },
      { 
        type: 'note', 
        content: 'Personal thoughts or observations about this place', 
        caption: 'Why this memory is significant' 
      }
    ]
  },
  {
    title: 'my_location_name',
    type: 'art_gallery',
    date: 'my_date',
    description: 'Brief description of what happened at this location',
    memories: [
      { 
        type: 'text', 
        content: 'A memorable experience or event that happened here', 
        caption: 'Personal reflection or additional context' 
      },
      { 
        type: 'note', 
        content: 'Personal thoughts or observations about this place', 
        caption: 'Why this memory is significant' 
      }
    ]
  },
  {
    title: 'my_location_name',
    type: 'sports_venue',
    date: 'my_date',
    description: 'Brief description of what happened at this location',
    memories: [
      { 
        type: 'text', 
        content: 'A memorable experience or event that happened here', 
        caption: 'Personal reflection or additional context' 
      },
      { 
        type: 'note', 
        content: 'Personal thoughts or observations about this place', 
        caption: 'Why this memory is significant' 
      }
    ]
  },
  {
    title: 'my_location_name',
    type: 'arcade',
    date: 'my_date',
    description: 'Brief description of what happened at this location',
    memories: [
      { 
        type: 'text', 
        content: 'A memorable experience or event that happened here', 
        caption: 'Personal reflection or additional context' 
      },
      { 
        type: 'note', 
        content: 'Personal thoughts or observations about this place', 
        caption: 'Why this memory is significant' 
      }
    ]
  },
  {
    title: 'my_location_name',
    type: 'personal_achievement',
    date: 'my_date',
    description: 'Brief description of what happened at this location',
    memories: [
      { 
        type: 'text', 
        content: 'A memorable experience or event that happened here', 
        caption: 'Personal reflection or additional context' 
      },
      { 
        type: 'note', 
        content: 'Personal thoughts or observations about this place', 
        caption: 'Why this memory is significant' 
      }
    ]
  },
  {
    title: 'my_location_name',
    type: 'concert_hall',
    date: 'my_date',
    description: 'Brief description of what happened at this location',
    memories: [
      { 
        type: 'text', 
        content: 'A memorable experience or event that happened here', 
        caption: 'Personal reflection or additional context' 
      },
      { 
        type: 'note', 
        content: 'Personal thoughts or observations about this place', 
        caption: 'Why this memory is significant' 
      }
    ]
  },
  {
    title: 'my_location_name',
    type: 'scenic_viewpoint',
    date: 'my_date',
    description: 'Brief description of what happened at this location',
    memories: [
      { 
        type: 'text', 
        content: 'A memorable experience or event that happened here', 
        caption: 'Personal reflection or additional context' 
      },
      { 
        type: 'note', 
        content: 'Personal thoughts or observations about this place', 
        caption: 'Why this memory is significant' 
      }
    ]
  },
  {
    title: 'my_location_name',
    type: 'home',
    date: 'my_date',
    description: 'Brief description of what happened at this location',
    memories: [
      { 
        type: 'text', 
        content: 'A memorable experience or event that happened here', 
        caption: 'Personal reflection or additional context' 
      },
      { 
        type: 'note', 
        content: 'Personal thoughts or observations about this place', 
        caption: 'Why this memory is significant' 
      }
    ]
  },
  {
    title: 'my_location_name',
    type: 'achievement_location',
    date: 'my_date',
    description: 'Brief description of what happened at this location',
    memories: [
      { 
        type: 'text', 
        content: 'A memorable experience or event that happened here', 
        caption: 'Personal reflection or additional context' 
      },
      { 
        type: 'note', 
        content: 'Personal thoughts or observations about this place', 
        caption: 'Why this memory is significant' 
      }
    ]
  }

];

