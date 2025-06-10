/**************************************************************/
// main.mjs
// Main entry for index.html
// Written by <Madhulika Tirindi>, Term 2 2025
/**************************************************************/
/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the constants & functions required from fb_io module
import { fb_initialise }
    from './fb_io.mjs';
    window.fb_initialise   = fb_initialise;
    
import { fb_authenticate }
    from './fb_io.mjs';
    window.fb_authenticate   = fb_authenticate;

import { fb_UpdateFbRec }
    from './fb_io.mjs';
    window.fb_UpdateFbRec   = fb_UpdateFbRec;

import { fb_ReadSpecificFirebase }
    from './fb_io.mjs';
    window.fb_ReadSpecificFirebase   = fb_ReadSpecificFirebase;
/**************************************************************/
//   END OF CODE
/**************************************************************/
