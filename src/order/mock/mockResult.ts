export function activate() {
    const activateJsonMock = 
    {
        "emissionDate": "2023-12-06T15:30:00Z",
        "service": "Estándar",
        "channel": "En línea",
        "isDangerousShipping": false,
        "creationUser": "juan.perez",
        "observation": "Esta es una activación de muestra",
        "references": {
            "ref1": "valor1",
            "ref2": "valor2"
        },
        "declaredValue": 100.50,
        "seller": {
            "account": "juan.perez",
            "name": "Empresa Vendedora",
            "identifier": "12345678-9",
            "phone": "912345678",
            "email": "vendedor@example.com"
        },
        "buyer": {
            "name": "Juan Comprador",
            "identifier": "987654321",
            "phone": "98654321",
            "email": "comprador@example.com"
        },
        "pickup": {
            "street": "Calle Principal 123",
            "number": 456,
            "commune": "Comuna Central",
            "city": "Ciudad",
            "region": "Región",
            "location": "Ubicación",
            "geoLocalization": "40.7128,-74.0060",
            "complement": "Cerca del parque",
            "agency": 789
        },
        "delivery": {
            "street": "Calle Secundaria 456",
            "number": 789,
            "commune": "Comuna Sur",
            "city": "Ciudad",
            "region": "Región",
            "location": "Ubicación",
            "geoLocalization": "40.7128,-74.0060",
            "complement": "Al otro lado de la calle",
            "agency": 1011
        },
        "complementary": {
            "serviceType": "Seguro",
            "identifier": "ABC123",
            "documentType": "Póliza",
            "amount": 20.00,
            "collection": {
                "method": "Tarjeta de crédito",
                "date": "2023-12-15",
                "amount": 20.00,
                "transactionId": "XYZ789"
            }
        },
        "packages": [
            {
                "packageId": "PKG001",
                "state": true,
                "referenceChildOrder": "ChildOrder001",
                "size": "M",
                "evidenceOfDelivery": {
                "receiver": "Nombre del receptor",
                "identifier": "987654321",
                "reasonRejection": "Dañado",
                "phone": "987-654-3210",
                "photos": [
                    "https://example.com/foto1.jpg",
                    "https://example.com/foto2.jpg"
              ],
                "geolocalization": "40.7128,-74.0060"
            },
                "inspection": {
                    "height": 10.0,
                    "length": 20.0,
                    "width": 15.0,
                    "weight": 5.0,
                    "type": "Caja",
                    "units": {
                        "length": "cm",
                        "width": "cm"
                    }
                }
            }
        ]
    }
    const stringifiedJson = stringifyJSON(activateJsonMock);    
    return stringifiedJson;
}

function stringifyJSON(obj: any) {
    try {
        const jsonString = JSON.stringify(obj, null, 2);
        return jsonString;
    } catch (error) {
        console.error('Error al convertir a JSON:', error.message);
        return null;
    }
}
  
    
export function emission() {
        
    return "sas"
}



