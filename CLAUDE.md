# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a virtual pet application called "Regenmon" (also referred to as "Regen-Buddy") with the following characteristics:
- Retro 8-bit aesthetic inspired by classic RPG games
- Interactive virtual pet with dynamic personality and stats
- AI-powered chat functionality using Anthropic's Claude API
- Stats system (Felicidad/Happiness, Energía/Energy, Hambre/Hunger)
- Local persistence using localStorage
- Authentication system using Privy
- Currency system with $FRUTA coins

## Technology Stack

- HTML5, CSS3, JavaScript (Vanilla)
- NES.css for 8-bit styling
- "Press Start 2P" Google Font for retro typography
- Anthropic Claude API for AI chat functionality
- Privy for authentication
- Vercel for deployment

## Key Files and Structure

- `index.html`: Main application interface with pet display, stats, chat, authentication, and currency system
- `api/chat.js`: Serverless function handling Anthropic API integration
- `README.md`: Project documentation with setup instructions
- `IMPLEMENTATION_SUMMARY.md`: Detailed documentation of implemented features

## Development Commands

To run locally:
1. Serve the static files using any local server solution
2. Set up environment variables for ANTHROPIC_API_KEY

For deployment:
- Deploy to Vercel (already configured with .vercel directory)

## Architecture Overview

The application follows a client-server architecture:
- Frontend: Static HTML/CSS/JS with localStorage persistence and Privy authentication
- Backend: Serverless function for AI chat processing
- Data Flow: User input → Client-side validation → API call → AI processing → Response display

Key components:
1. Pet creation system with name and type selection
2. Stats visualization (health bars for happiness, energy, hunger)
3. Chat interface with retro-styled message bubbles
4. Memory system that tracks user preferences and interactions
5. Responsive design that works on mobile devices
6. Authentication system using Privy
7. Currency system with $FRUTA coins
8. Action system for interacting with the pet (feeding, playing, etc.)

## Integration Points for Future Features

1. Enhanced persistence with user accounts
2. Historical activity tracking
3. Additional action buttons for interacting with the pet
4. Visual feedback animations for actions and currency changes
5. Expanded currency earning mechanics
6. More sophisticated pet AI behaviors based on stats and interactions
7. Social features for sharing pets or competing with friends