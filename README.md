# Image Search API Documentation

## Overview

The Image Search API allows you to search for images using a query term. The API retrieves images from Pixabay and returns the image as an HTML page.

## Base URL

- **Development:** `http://localhost:3000`
- **Production:** `https://pictureapi.vercel.app`

## Endpoints

### 1. Get Image by Query

- **Endpoint:** GET `/:query`
- **Description:** Fetches an image based on the search query.

#### Request

- **Method:** GET
- **URL Parameter:** `query` - The search term for the image (e.g., cat, city).

#### Response

- **Success (200 OK):**

  ```html
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background-color: #e0f7fa;
        }
        img {
          max-width: 100%;
          height: auto;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        h1 {
          text-align: center;
          color: #00796b;
        }
      </style>
    </head>
    <body>
      <h1>Here is an image of "query":</h1>
      <img src="imageUrl" alt="Image of query">
    </body>
  </html>

## query - The search term used in the image query.

## imageUrl - The URL of the image returned by Pixabay.

## No Images Found (404 Not Found)

When no images are found for the specified query, the API will return the following HTML response:

```html
<html>
<head>
    <title>No Image Found</title>
</head>
<body>
    <h1>No image found for "${query}"</h1>
</body>
</html>


## Error (500 Internal Server Error)

When there is an issue with the API request or processing, the API will return the following HTML response:

```html
<html>
<head>
    <title>Error</title>
</head>
<body>
    <h1>Error fetching image</h1>
    <p>${error.message}</p>
</body>
</html>


## Example Requests

### 1. Successful Request

- **Request:**
  - **URL:** `https://pictureapi.vercel.app/cat`
  - **Method:** GET

- **Response:**
  If an image is found:

  ```html
  <html>
  <head>
      <style>
      body {
          font-family: Arial, sans-serif;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background-color: #e0f7fa; /* Light blue background */
      }
      img {
          max-width: 100%;
          height: auto;
          border: 1px solid #ddd;
          border-radius: 4px;
      }
      h1 {
          text-align: center;
          color: #00796b; /* Darker blue color for text */
      }
      </style>
  </head>
  <body>
      <h1>Here is an image of "cat":</h1>
      <img src="https://example.com/image.jpg" alt="Image of cat">
  </body>
  </html>


## No Images Found (404 Not Found)

When no images are found for the specified query, the API will return the following HTML response:

```html
<html>
<head>
    <title>No Image Found</title>
</head>
<body>
    <h1>No image found for "${query}"</h1>
</body>
</html>


## Error Handling

The API handles errors with the following HTTP status codes and responses:

### 404 Not Found

Returned when no images are found for the specified query.

**Response:**

```html
<html>
<head>
    <title>No Image Found</title>
</head>
<body>
    <h1>No image found for "${query}"</h1>
</body>
</html>


## 500 Internal Server Error

Returned when there is an issue with the API request or processing.

**Response:**

```html
<html>
<head>
    <title>Error</title>
</head>
<body>
    <h1>Error fetching image</h1>
    <p>${error.message}</p>
</body>
</html>


