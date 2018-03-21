# CORS Bridge

[https://corsbridge.herokuapp.com/](https://corsbridge.herokuapp.com/)

CORS Bridge is a simple app meant to work as a bridge for API requests that have CORS issues. 

Use the UI that is loaded when no request is made, to generate the full url for a get request, OR use the examples below to encode your URL and retrieve the data as either a GET or POST request.

## Usage Examples

As a GET request:
```
var queryUrl = "https://www.numbeo.com/api/city_prices?api_key=4n7468zewaj81z&query=Belgrade";

var encodedUrl = encodeURIComponent( queryUrl );
$.ajax( {
    type: 'GET',
    contentType: 'application/json',
    url: 'https://corsbridge.herokuapp.com/' + encodedUrl,
    success: function ( data ) {
        console.log( data );
    }
} );
```
As a POST request:
```
var queryUrl = "Generated API URL";
$.ajax( {
    type: 'POST',
    data: JSON.stringify( {
        url: queryUrl
    } ),
    contentType: 'application/json',
    url: 'https://corsbridge.herokuapp.com',
    success: function ( data ) {
        console.log( data );
    }
} );
```