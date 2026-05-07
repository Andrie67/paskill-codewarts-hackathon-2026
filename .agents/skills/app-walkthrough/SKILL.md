---
name: app-walkthrough
description: Simulates a user session and provides a comprehensive step-by-step walkthrough of the application's UX flows.
---

# App Walkthrough Simulator

This skill guides the AI on how to simulate and walk through an application's user experience.

## When to use

Use this skill when the user wants to understand the UX flow, test the application conceptually, or asks you to "simulate" or "walk through" the application.

## Instructions

When walking through an application, follow this structured format to ensure a rigorous and clear evaluation of the UX:

1. **Define the Scenario**: 
   - **Persona**: Who is the simulated user? (e.g., A blue-collar construction worker looking for jobs).
   - **Goal**: What are they trying to achieve? (e.g., Sign up and get verified).

2. **Step-by-Step Simulation**:
   For each step in the flow, document:
   - **Current Screen**: What does the user see?
   - **User Action**: What exact action does the user take? (e.g., "Taps on the 'Upload ID' button").
   - **System Response**: How does the system react? (e.g., "A modal slides up showing the camera interface").
   
   *Tip: Use your `generate_image` tool to generate visual mockups of key screens during the walkthrough to make the simulation highly visual.*

3. **Friction Points & Edge Cases**: 
   - Note any potential friction points the user might encounter.
   - Describe how the app handles edge cases (e.g., "User's uploaded photo is too blurry - system prompts for a retake").

4. **Resolution**: 
   - Describe the successful completion of the flow and the resulting state of the app.

### Example Output Format

**Scenario: Employer Searching for a Worker**
- **Persona**: Small business owner needing a plumber.

**Step 1: The Dashboard**
- **Current Screen**: Employer Dashboard showing active job listings and a search bar.
- **User Action**: Taps the search bar and types "Plumber".
- **System Response**: Live-search populates a list of verified plumbers sorted by AI Confidence Score.

**Step 2: Profile Review**
- **Current Screen**: Plumber's "Passport" profile.
- **User Action**: Scrolls down to "Task-based Evidence" and taps on a video.
- **System Response**: Video plays fullscreen showing the worker fixing a pipe.

By following this strict format, you ensure that the application's UX is thoroughly tested in a conceptual environment.
