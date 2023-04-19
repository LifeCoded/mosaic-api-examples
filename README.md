# 🌟 Mosaic API Sample Code 🌟

## 📚 Description:

This repository contains professional, easy-to-understand sample code to make requests to the Mosaic API. The code is written in TypeScript and uses the fetch method for making requests.

## 🚀 Getting Started:

To get started, you need to have the following:

1. A Mosaic account (Sign up here: https://www.mosaic.com/signup)
2. An API key with the appropriate permissions to make requests to the API

Once you have these, you can clone this repository and install the dependencies by running:

npm install

## 🔧 Running the Sample Code:

To run the sample code, you need to set the following environment variables:

- MOSAIC_API_KEY: Your Mosaic API key
- MOSAIC_API_BASE_URL: The base URL for the Mosaic API (e.g. https://api.mosaic.com/v1)

You can then run the sample code by running:

npm start

This will run the sample code, which makes requests to the Mosaic API and logs the response to the console.

## 💡 Using the Sample Code:

The sample code contains examples of making requests to the following endpoints:

- /api/index: Fetches all projects under a portfolio
- /api/update/project_id: Updates a project
- /api/destroy/id: Deletes a project (Archives if there is time spent on the project)

You can use the sample code as a starting point for making requests to other endpoints in the Mosaic API. Simply update the request URL and parameters to match the endpoint you want to call.

## 🤝 Contributing:

If you find any issues with the sample code or want to add additional examples, feel free to open a pull request.

### 📄 License:

This code is licensed under the MIT License. See the LICENSE file for details.
