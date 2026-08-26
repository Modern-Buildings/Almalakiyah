# Al-Malakiyah (Royalty) — Project Structure & File Guide

This document provides a comprehensive mapping of all files and folders in the **Al-Malakiyah (Royalty)** property management and real estate database codebase. Use the links below to quickly navigate and open files in your editor.

---

## 📂 Directory Overview

Here is the high-level tree structure of the codebase:

```text
E:/Al-Malakiyah/
├── .vscode/                 # Editor workspaces configuration
├── admin/                   # Admin panel web pages (HTML)
│   └── .vscode/             # Admin-specific workspace settings
├── assets/                  # Client-side static assets
│   ├── css/                 # Styling stylesheets
│   ├── img/                 # Images & icons
│   ├── js/                  # Client-side JavaScript modules
│   │   └── admin/           # Admin-specific script handlers
│   └── vid/                 # Promotional cinematic videos
├── functions/               # Cloud Functions configuration & settings
├── Logs/                    # Debugging reports and logs
├── scripts/                 # Importers and database migration scripts
│   └── exported-data/       # Migrated source JSON files (ignored in git)
├── supabase/                # Supabase database config, schemas & functions
│   └── functions/           # Supabase Edge Functions (Deno TypeScript)
└── worker/                  # Cloudflare Worker code for API integration
```

---

## 📄 File & Folder Explanations

### 1. Root Pages & Config Files
*   [index.html](file:///E:/Al-Malakiyah/index.html) — The primary homepage for Al-Malakiyah. Designed with a luxury dark theme, Arabic support (RTL), dynamic GSAP text reveals, and a cinematic background video.
*   [about.html](file:///E:/Al-Malakiyah/about.html) — The "About Us" page detailing the company's background, vision, and mission.
*   [projects.html](file:///E:/Al-Malakiyah/projects.html) — Showcase section highlighting current developer projects and land developments.
*   [properties.html](file:///E:/Al-Malakiyah/properties.html) — Main portal page for browsing available real estate property listings. Includes search controls.
*   [interactive.html](file:///E:/Al-Malakiyah/interactive.html) — Interactive user dashboard featuring mapping and property analysis displays.
*   [contact.html](file:///E:/Al-Malakiyah/contact.html) — Client contact and inquiry page.
*   [404.html](file:///E:/Al-Malakiyah/404.html) — Custom luxury-themed Page Not Found error page.
*   [README.md](file:///E:/Al-Malakiyah/README.md) — Base markdown documentation detailing Royalty's features, purpose, users, and future goals.
*   [.env](file:///E:/Al-Malakiyah/.env) — Local configuration environment variables storing Supabase API URL and client keys.
*   [.gitignore](file:///E:/Al-Malakiyah/.gitignore) — Tells Git which temporary files, logs, `node_modules`, and `.env` files to ignore.

---

### 2. Admin Panel Page (admin/)
The admin folder handles all administrative operations.
*   [admin/index.html](file:///E:/Al-Malakiyah/admin/index.html) — Admin panel home page dashboard offering statistics overview and quick shortcuts to system pages.
*   [admin/database.html](file:///E:/Al-Malakiyah/admin/database.html) — Custom database record explorer allowing administrators to manage fields under custom schemas.
*   [admin/databases.html](file:///E:/Al-Malakiyah/admin/databases.html) — Database schema builder. Admins can create and edit database definitions.
*   [admin/properties.html](file:///E:/Al-Malakiyah/admin/properties.html) — Real estate catalog viewer displaying property listings, verification status, and actions.
*   [admin/property-edit.html](file:///E:/Al-Malakiyah/admin/property-edit.html) — Interactive editor containing form inputs to update or add real estate properties.
*   [admin/property-view.html](file:///E:/Al-Malakiyah/admin/property-view.html) — Detailed view for properties, highlighting deeds, plans, and location maps.
*   [admin/users.html](file:///E:/Al-Malakiyah/admin/users.html) — Admin page to manage system user profiles, permissions, and roles.
*   [admin/messages.html](file:///E:/Al-Malakiyah/admin/messages.html) — Panel for creating internal alerts, broadcasting announcements, or chatting with staff.
*   [admin/map.html](file:///E:/Al-Malakiyah/admin/map.html) — Dashboard map displaying coordinates and physical property boundaries.
*   [admin/settings.html](file:///E:/Al-Malakiyah/admin/settings.html) — Settings page where admin users can reset their password or change options.
*   [admin/setup.html](file:///E:/Al-Malakiyah/admin/setup.html) — First-time setup flow wizard for newly migrated users to update their profile and password.
*   [admin/login.html](file:///E:/Al-Malakiyah/admin/login.html) — Secure portal login interface integrated with Supabase Auth.
*   [admin/logs.html](file:///E:/Al-Malakiyah/admin/logs.html) — Audit logger view presenting administrative actions chronologically.
*   [admin/.vscode/settings.json](file:///E:/Al-Malakiyah/admin/.vscode/settings.json) — Admin folder editor customization configurations.

---

### 3. Static Assets (assets/)
Stores standard static libraries, custom styling, client scripts, and images.

#### 🎨 CSS Stylesheets (assets/css/)
*   [assets/css/style.css](file:///E:/Al-Malakiyah/assets/css/style.css) — Core web page configurations defining custom properties, luxury color themes (cream, charcoal, gold), and typography variables.
*   [assets/css/main.css](file:///E:/Al-Malakiyah/assets/css/main.css) — Layout styling definitions for grids, flexboxes, page transition overlays, and the luxury cursor element.
*   [assets/css/admin.css](file:///E:/Al-Malakiyah/assets/css/admin.css) — Massive layout styling file dedicated to admin cards, sidebars, tables, and settings fields.

#### ⚙️ JavaScript Helpers (assets/js/)
*   [assets/js/main.js](file:///E:/Al-Malakiyah/assets/js/main.js) — Main setup file running smooth-scrolling engines (Lenis), GSAP parallax setups, cursor mouse-tracking, and text split-type triggers.
*   [assets/js/supabase-config.js](file:///E:/Al-Malakiyah/assets/js/supabase-config.js) — Instantiates the Supabase JS client to authenticate and communicate with the backend.
*   [assets/js/db.js](file:///E:/Al-Malakiyah/assets/js/db.js) — Core data layer supplying CRUD wrapper methods targeting the main `properties`, `messages`, `projects`, and `logs` tables.
*   [assets/js/auth.js](file:///E:/Al-Malakiyah/assets/js/auth.js) — Auth wrapper handling credentials submissions, session management, and redirection routing.
*   [assets/js/admin-auth.js](file:///E:/Al-Malakiyah/assets/js/admin-auth.js) — Admin route guard that redirects unauthenticated requests back to the login page.
*   [assets/js/databases-db.js](file:///E:/Al-Malakiyah/assets/js/databases-db.js) — Data layer utilities for custom user-created database schemas and records.
*   [assets/js/db-icons.js](file:///E:/Al-Malakiyah/assets/js/db-icons.js) — Maps icons to specific custom databases based on category metadata.
*   [assets/js/boundary-utils.js](file:///E:/Al-Malakiyah/assets/js/boundary-utils.js) — Logic for resolving property geospatial boundaries.
*   [assets/js/property-extractor.js](file:///E:/Al-Malakiyah/assets/js/property-extractor.js) — File parser helping pull data parameters from uploaded property deeds or PDFs.
*   [assets/js/i18n.js](file:///E:/Al-Malakiyah/assets/js/i18n.js) — Translation engine providing full English/Arabic translations for the admin dashboard.
*   [assets/js/portal-ui.js](file:///E:/Al-Malakiyah/assets/js/portal-ui.js) — Renders the public properties listings, categories, and detail cards dynamically.
*   [assets/js/profile-cache.js](file:///E:/Al-Malakiyah/assets/js/profile-cache.js) — Local cache tool to store user settings and details, minimizing query overhead.
*   [assets/js/roles.js](file:///E:/Al-Malakiyah/assets/js/roles.js) — Helper module inspecting roles (e.g. manager, viewer, editor) to update frontend view layouts.
*   [assets/js/storage.js](file:///E:/Al-Malakiyah/assets/js/storage.js) — Interconnects with Supabase Storage buckets to upload deed files, plans, and images.
*   [assets/js/ui.js](file:///E:/Al-Malakiyah/assets/js/ui.js) — General UI module establishing standard sidebars, navigation drawers, and dark mode toggles.
*   [assets/js/whatsapp.js](file:///E:/Al-Malakiyah/assets/js/whatsapp.js) — Integrates WhatsApp message triggers referencing the custom worker endpoints.
*   [assets/js/animations.js](file:///E:/Al-Malakiyah/assets/js/animations.js) — Renders animation timelines for page headers and interactive components.

#### 🛠️ Admin Script Handlers (assets/js/admin/)
*   [assets/js/admin/index.js](file:///E:/Al-Malakiyah/assets/js/admin/index.js) — Admin homepage script retrieving counts and loading quick statistics.
*   [assets/js/admin/database.js](file:///E:/Al-Malakiyah/assets/js/admin/database.js) — Drives UI interactions inside custom tables, handling record inserts, edits, and schema field logic.
*   [assets/js/admin/databases.js](file:///E:/Al-Malakiyah/assets/js/admin/databases.js) — Code rendering custom databases schema builder configurations.
*   [assets/js/admin/properties.js](file:///E:/Al-Malakiyah/assets/js/admin/properties.js) — Properties table list script implementing paging, search filters, and quick status changes.
*   [assets/js/admin/property-edit.js](file:///E:/Al-Malakiyah/assets/js/admin/property-edit.js) — Coordinates edit forms, managing dynamic field inputs, map pins, and file upload components.
*   [assets/js/admin/property-view.js](file:///E:/Al-Malakiyah/assets/js/admin/property-view.js) — UI generator assembling maps, image galleries, and data listings for individual property details.
*   [assets/js/admin/users.js](file:///E:/Al-Malakiyah/assets/js/admin/users.js) — User management console controller mapping user accounts, roles toggles, and delete operations.
*   [assets/js/admin/messages.js](file:///E:/Al-Malakiyah/assets/js/admin/messages.js) — Controller script for draft creations, broadcast lists, and logs.
*   [assets/js/admin/map.js](file:///E:/Al-Malakiyah/assets/js/admin/map.js) — Initiates the Leaflet mapping component and enables polygon drawing for property boundaries.
*   [assets/js/admin/map-fallback.js](file:///E:/Al-Malakiyah/assets/js/admin/map-fallback.js) — Map loading backup logic in case external CDN map API requests fail.
*   [assets/js/admin/login.js](file:///E:/Al-Malakiyah/assets/js/admin/login.js) — Controls login credentials collection, validation, and submission handlers.
*   [assets/js/admin/settings.js](file:///E:/Al-Malakiyah/assets/js/admin/settings.js) — Core admin profile configuration and password-changing logic.
*   [assets/js/admin/setup.js](file:///E:/Al-Malakiyah/assets/js/admin/setup.js) — Handles inputs validation and submission during the first-time setup process.
*   [assets/js/admin/logs.js](file:///E:/Al-Malakiyah/assets/js/admin/logs.js) — Connects with the logging table to display chronological admin events.

---

### 4. Database Schema & Serverless Functions (supabase/)
Configures backend tables, access controls, and serverless logic.
*   [supabase/schema.sql](file:///E:/Al-Malakiyah/supabase/schema.sql) — Crucial SQL file. Defines tables (`profiles`, `properties`, `property_docs`, `messages`, `logs`, `databases`, `taxonomy`, etc.), creates Row Level Security (RLS) policies, indexes, and establishes automated database trigger functions.
*   [supabase/functions/create-user/index.ts](file:///E:/Al-Malakiyah/supabase/functions/create-user/index.ts) — Deno Edge Function allowing authorized administrators to safely perform Auth User creation, deletion, and setup without affecting their active sessions.
*   [supabase/functions/send-whatsapp/index.ts](file:///E:/Al-Malakiyah/supabase/functions/send-whatsapp/index.ts) — Deno Edge Function providing rate-limited forwarding of messages to Facebook's official WhatsApp Business API.

---

### 5. Node Environment & Migration Utils (scripts/ & functions/)
*   [scripts/import-to-supabase.js](file:///E:/Al-Malakiyah/scripts/import-to-supabase.js) — Command-line script to parse Firebase JSON exports (under `exported-data/`) and populate profiles, databases, messages, properties, and logs on Supabase.
*   [scripts/migrate-media-to-supabase.js](file:///E:/Al-Malakiyah/scripts/migrate-media-to-supabase.js) — Database media migration script. Downloads photos/attachments from old locations (like Cloudinary) and uploads them to Supabase Storage.
*   [scripts/package.json](file:///E:/Al-Malakiyah/scripts/package.json) — Node configuration managing package dependencies for migration scripts.
*   [scripts/.env](file:///E:/Al-Malakiyah/scripts/.env) — Configuration variables for the migration script engine.
*   [functions/.env](file:///E:/Al-Malakiyah/functions/.env) — Local environmental variables config block for functions scripts.

---

### 6. Cloudflare Worker Gateway (worker/)
*   [worker/index.js](file:///E:/Al-Malakiyah/worker/index.js) — Rate-limited POST message endpoint forwarding client triggers to Meta's WhatsApp API.
*   [worker/wrangler.toml](file:///E:/Al-Malakiyah/worker/wrangler.toml) — Cloudflare Worker project setup configuration.

---

### 7. Documentation Reports (Logs/)
*   [Logs/dashboard-fix-report.md](file:///E:/Al-Malakiyah/Logs/dashboard-fix-report.md) — Bugfix report tracking enhancements to layout alignment, translations loading, and query constraints resolution.

---
*Generated by Antigravity on 2026-07-07*
