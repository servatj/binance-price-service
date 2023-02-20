# Binance Price Service

## Description

This is a simple proxy to get prices from binance api.

## Installation

1 - Clone the repository: git clone https://github.com/divance-cryptos/binance-price-service.git
2 - Install the dependencies: npm install

## Usage

1 - Start the app: npm start
2 - Access the app in your web browser at http://localhost:3000
3 - ``` curl --location --request GET 'http://localhost:3000/price?pair=BTCUSDT' \
--header 'Authorization: mysecret' ```

## Docker

The app is Dockerized and can be run as a container using Docker Compose. To build and run the Docker container:

Build the image: docker-compose build
Run the container: docker-compose up

## Deployment

The app can be deployed to a cloud platform like AWS Elastic Beanstalk or DigitalOcean's App Platform. To deploy the app:

Create an account on your cloud platform of choice.
Follow the instructions for deploying a Dockerized app to your cloud platform.
Set the necessary environment variables for your app.

## Configuration

The app uses environment variables to configure its behavior. The following environment variables can be set:

PORT: The port that the app listens on. Defaults to 3000.
SECRET: The secret key used for authentication. Defaults to mysecretkey.

## Contributing

Contributions are welcome! Please create a pull request or submit an issue if you find a bug or have a feature request.

## License

This app is licensed under the MIT License. See the LICENSE file for more information.

## Contact

If you have any questions or feedback, please feel free to contact me at myemail@example.com.
