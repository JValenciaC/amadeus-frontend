export const FlightOffers = [
    {
        "meta": {
            "count": 82,
            "links": {
                "self": "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2022-11-01&returnDate=2022-11-20&adults=1&travelClass=ECONOMY&nonStop=false&max=250"
            }
        },
        "data": [
            {
                "type": "flight-offer",
                "id": "1",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT14H15M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T11:35:00"
                                },
                                "arrival": {
                                    "iataCode": "MNL",
                                    "terminal": "2",
                                    "at": "2022-11-01T16:50:00"
                                },
                                "carrierCode": "PR",
                                "number": "212",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "PR"
                                },
                                "duration": "PT8H15M",
                                "id": "7",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MNL",
                                    "terminal": "1",
                                    "at": "2022-11-01T19:20:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T21:50:00"
                                },
                                "carrierCode": "PR",
                                "number": "732",
                                "aircraft": {
                                    "code": "321"
                                },
                                "operating": {
                                    "carrierCode": "PR"
                                },
                                "duration": "PT3H30M",
                                "id": "8",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT16H15M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T13:30:00"
                                },
                                "arrival": {
                                    "iataCode": "MNL",
                                    "terminal": "2",
                                    "at": "2022-11-20T18:00:00"
                                },
                                "carrierCode": "PR",
                                "number": "731",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "PR"
                                },
                                "duration": "PT3H30M",
                                "id": "47",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MNL",
                                    "terminal": "1",
                                    "at": "2022-11-20T22:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T09:45:00"
                                },
                                "carrierCode": "PR",
                                "number": "211",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "PR"
                                },
                                "duration": "PT8H35M",
                                "id": "48",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "610.07",
                    "base": "396.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "610.07"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "PR"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "610.07",
                            "base": "396.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "7",
                                "cabin": "ECONOMY",
                                "fareBasis": "TBAU",
                                "class": "T",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "8",
                                "cabin": "ECONOMY",
                                "fareBasis": "TBAU",
                                "class": "T",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "KBAU",
                                "class": "K",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "KBAU",
                                "class": "K",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "2",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT28H30M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T11:35:00"
                                },
                                "arrival": {
                                    "iataCode": "MNL",
                                    "terminal": "2",
                                    "at": "2022-11-01T16:50:00"
                                },
                                "carrierCode": "PR",
                                "number": "212",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "PR"
                                },
                                "duration": "PT8H15M",
                                "id": "21",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MNL",
                                    "terminal": "1",
                                    "at": "2022-11-02T09:45:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T12:05:00"
                                },
                                "carrierCode": "PR",
                                "number": "730",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "PR"
                                },
                                "duration": "PT3H20M",
                                "id": "22",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT16H15M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T13:30:00"
                                },
                                "arrival": {
                                    "iataCode": "MNL",
                                    "terminal": "2",
                                    "at": "2022-11-20T18:00:00"
                                },
                                "carrierCode": "PR",
                                "number": "731",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "PR"
                                },
                                "duration": "PT3H30M",
                                "id": "47",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MNL",
                                    "terminal": "1",
                                    "at": "2022-11-20T22:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T09:45:00"
                                },
                                "carrierCode": "PR",
                                "number": "211",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "PR"
                                },
                                "duration": "PT8H35M",
                                "id": "48",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "610.07",
                    "base": "396.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "610.07"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "PR"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "610.07",
                            "base": "396.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "21",
                                "cabin": "ECONOMY",
                                "fareBasis": "TBAU",
                                "class": "T",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "22",
                                "cabin": "ECONOMY",
                                "fareBasis": "TBAU",
                                "class": "T",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "KBAU",
                                "class": "K",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "KBAU",
                                "class": "K",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "3",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT14H15M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T11:35:00"
                                },
                                "arrival": {
                                    "iataCode": "MNL",
                                    "terminal": "2",
                                    "at": "2022-11-01T16:50:00"
                                },
                                "carrierCode": "PR",
                                "number": "212",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "PR"
                                },
                                "duration": "PT8H15M",
                                "id": "7",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MNL",
                                    "terminal": "1",
                                    "at": "2022-11-01T19:20:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T21:50:00"
                                },
                                "carrierCode": "PR",
                                "number": "732",
                                "aircraft": {
                                    "code": "321"
                                },
                                "operating": {
                                    "carrierCode": "PR"
                                },
                                "duration": "PT3H30M",
                                "id": "8",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT30H55M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T22:50:00"
                                },
                                "arrival": {
                                    "iataCode": "MNL",
                                    "terminal": "2",
                                    "at": "2022-11-21T03:15:00"
                                },
                                "carrierCode": "PR",
                                "number": "733",
                                "aircraft": {
                                    "code": "321"
                                },
                                "operating": {
                                    "carrierCode": "PR"
                                },
                                "duration": "PT3H25M",
                                "id": "75",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MNL",
                                    "terminal": "1",
                                    "at": "2022-11-21T22:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-22T09:45:00"
                                },
                                "carrierCode": "PR",
                                "number": "211",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "PR"
                                },
                                "duration": "PT8H35M",
                                "id": "76",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "610.07",
                    "base": "396.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "610.07"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "PR"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "610.07",
                            "base": "396.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "7",
                                "cabin": "ECONOMY",
                                "fareBasis": "TBAU",
                                "class": "T",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "8",
                                "cabin": "ECONOMY",
                                "fareBasis": "TBAU",
                                "class": "T",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "75",
                                "cabin": "ECONOMY",
                                "fareBasis": "KBAU",
                                "class": "K",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "76",
                                "cabin": "ECONOMY",
                                "fareBasis": "KBAU",
                                "class": "K",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "4",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT33H10M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T11:35:00"
                                },
                                "arrival": {
                                    "iataCode": "MNL",
                                    "terminal": "2",
                                    "at": "2022-11-01T16:50:00"
                                },
                                "carrierCode": "PR",
                                "number": "212",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "PR"
                                },
                                "duration": "PT8H15M",
                                "id": "5",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MNL",
                                    "terminal": "1",
                                    "at": "2022-11-02T14:25:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T16:45:00"
                                },
                                "carrierCode": "PR",
                                "number": "736",
                                "aircraft": {
                                    "code": "321"
                                },
                                "operating": {
                                    "carrierCode": "PR"
                                },
                                "duration": "PT3H20M",
                                "id": "6",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT16H15M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T13:30:00"
                                },
                                "arrival": {
                                    "iataCode": "MNL",
                                    "terminal": "2",
                                    "at": "2022-11-20T18:00:00"
                                },
                                "carrierCode": "PR",
                                "number": "731",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "PR"
                                },
                                "duration": "PT3H30M",
                                "id": "47",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MNL",
                                    "terminal": "1",
                                    "at": "2022-11-20T22:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T09:45:00"
                                },
                                "carrierCode": "PR",
                                "number": "211",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "PR"
                                },
                                "duration": "PT8H35M",
                                "id": "48",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "610.07",
                    "base": "396.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "610.07"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "PR"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "610.07",
                            "base": "396.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "5",
                                "cabin": "ECONOMY",
                                "fareBasis": "TBAU",
                                "class": "T",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "6",
                                "cabin": "ECONOMY",
                                "fareBasis": "TBAU",
                                "class": "T",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "KBAU",
                                "class": "K",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "KBAU",
                                "class": "K",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "5",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT14H15M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T11:35:00"
                                },
                                "arrival": {
                                    "iataCode": "MNL",
                                    "terminal": "2",
                                    "at": "2022-11-01T16:50:00"
                                },
                                "carrierCode": "PR",
                                "number": "212",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "PR"
                                },
                                "duration": "PT8H15M",
                                "id": "7",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MNL",
                                    "terminal": "1",
                                    "at": "2022-11-01T19:20:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T21:50:00"
                                },
                                "carrierCode": "PR",
                                "number": "732",
                                "aircraft": {
                                    "code": "321"
                                },
                                "operating": {
                                    "carrierCode": "PR"
                                },
                                "duration": "PT3H30M",
                                "id": "8",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT35H50M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T17:55:00"
                                },
                                "arrival": {
                                    "iataCode": "MNL",
                                    "terminal": "2",
                                    "at": "2022-11-20T22:25:00"
                                },
                                "carrierCode": "PR",
                                "number": "737",
                                "aircraft": {
                                    "code": "321"
                                },
                                "operating": {
                                    "carrierCode": "PR"
                                },
                                "duration": "PT3H30M",
                                "id": "70",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MNL",
                                    "terminal": "1",
                                    "at": "2022-11-21T22:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-22T09:45:00"
                                },
                                "carrierCode": "PR",
                                "number": "211",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "PR"
                                },
                                "duration": "PT8H35M",
                                "id": "71",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "610.07",
                    "base": "396.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "610.07"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "PR"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "610.07",
                            "base": "396.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "7",
                                "cabin": "ECONOMY",
                                "fareBasis": "TBAU",
                                "class": "T",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "8",
                                "cabin": "ECONOMY",
                                "fareBasis": "TBAU",
                                "class": "T",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "70",
                                "cabin": "ECONOMY",
                                "fareBasis": "KBAU",
                                "class": "K",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "71",
                                "cabin": "ECONOMY",
                                "fareBasis": "KBAU",
                                "class": "K",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "6",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT28H30M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T11:35:00"
                                },
                                "arrival": {
                                    "iataCode": "MNL",
                                    "terminal": "2",
                                    "at": "2022-11-01T16:50:00"
                                },
                                "carrierCode": "PR",
                                "number": "212",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "PR"
                                },
                                "duration": "PT8H15M",
                                "id": "21",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MNL",
                                    "terminal": "1",
                                    "at": "2022-11-02T09:45:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T12:05:00"
                                },
                                "carrierCode": "PR",
                                "number": "730",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "PR"
                                },
                                "duration": "PT3H20M",
                                "id": "22",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT30H55M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T22:50:00"
                                },
                                "arrival": {
                                    "iataCode": "MNL",
                                    "terminal": "2",
                                    "at": "2022-11-21T03:15:00"
                                },
                                "carrierCode": "PR",
                                "number": "733",
                                "aircraft": {
                                    "code": "321"
                                },
                                "operating": {
                                    "carrierCode": "PR"
                                },
                                "duration": "PT3H25M",
                                "id": "75",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MNL",
                                    "terminal": "1",
                                    "at": "2022-11-21T22:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-22T09:45:00"
                                },
                                "carrierCode": "PR",
                                "number": "211",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "PR"
                                },
                                "duration": "PT8H35M",
                                "id": "76",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "610.07",
                    "base": "396.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "610.07"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "PR"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "610.07",
                            "base": "396.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "21",
                                "cabin": "ECONOMY",
                                "fareBasis": "TBAU",
                                "class": "T",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "22",
                                "cabin": "ECONOMY",
                                "fareBasis": "TBAU",
                                "class": "T",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "75",
                                "cabin": "ECONOMY",
                                "fareBasis": "KBAU",
                                "class": "K",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "76",
                                "cabin": "ECONOMY",
                                "fareBasis": "KBAU",
                                "class": "K",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "7",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT33H10M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T11:35:00"
                                },
                                "arrival": {
                                    "iataCode": "MNL",
                                    "terminal": "2",
                                    "at": "2022-11-01T16:50:00"
                                },
                                "carrierCode": "PR",
                                "number": "212",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "PR"
                                },
                                "duration": "PT8H15M",
                                "id": "5",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MNL",
                                    "terminal": "1",
                                    "at": "2022-11-02T14:25:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T16:45:00"
                                },
                                "carrierCode": "PR",
                                "number": "736",
                                "aircraft": {
                                    "code": "321"
                                },
                                "operating": {
                                    "carrierCode": "PR"
                                },
                                "duration": "PT3H20M",
                                "id": "6",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT30H55M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T22:50:00"
                                },
                                "arrival": {
                                    "iataCode": "MNL",
                                    "terminal": "2",
                                    "at": "2022-11-21T03:15:00"
                                },
                                "carrierCode": "PR",
                                "number": "733",
                                "aircraft": {
                                    "code": "321"
                                },
                                "operating": {
                                    "carrierCode": "PR"
                                },
                                "duration": "PT3H25M",
                                "id": "75",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MNL",
                                    "terminal": "1",
                                    "at": "2022-11-21T22:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-22T09:45:00"
                                },
                                "carrierCode": "PR",
                                "number": "211",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "PR"
                                },
                                "duration": "PT8H35M",
                                "id": "76",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "610.07",
                    "base": "396.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "610.07"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "PR"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "610.07",
                            "base": "396.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "5",
                                "cabin": "ECONOMY",
                                "fareBasis": "TBAU",
                                "class": "T",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "6",
                                "cabin": "ECONOMY",
                                "fareBasis": "TBAU",
                                "class": "T",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "75",
                                "cabin": "ECONOMY",
                                "fareBasis": "KBAU",
                                "class": "K",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "76",
                                "cabin": "ECONOMY",
                                "fareBasis": "KBAU",
                                "class": "K",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "8",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT28H30M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T11:35:00"
                                },
                                "arrival": {
                                    "iataCode": "MNL",
                                    "terminal": "2",
                                    "at": "2022-11-01T16:50:00"
                                },
                                "carrierCode": "PR",
                                "number": "212",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "PR"
                                },
                                "duration": "PT8H15M",
                                "id": "21",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MNL",
                                    "terminal": "1",
                                    "at": "2022-11-02T09:45:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T12:05:00"
                                },
                                "carrierCode": "PR",
                                "number": "730",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "PR"
                                },
                                "duration": "PT3H20M",
                                "id": "22",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT35H50M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T17:55:00"
                                },
                                "arrival": {
                                    "iataCode": "MNL",
                                    "terminal": "2",
                                    "at": "2022-11-20T22:25:00"
                                },
                                "carrierCode": "PR",
                                "number": "737",
                                "aircraft": {
                                    "code": "321"
                                },
                                "operating": {
                                    "carrierCode": "PR"
                                },
                                "duration": "PT3H30M",
                                "id": "70",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MNL",
                                    "terminal": "1",
                                    "at": "2022-11-21T22:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-22T09:45:00"
                                },
                                "carrierCode": "PR",
                                "number": "211",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "PR"
                                },
                                "duration": "PT8H35M",
                                "id": "71",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "610.07",
                    "base": "396.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "610.07"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "PR"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "610.07",
                            "base": "396.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "21",
                                "cabin": "ECONOMY",
                                "fareBasis": "TBAU",
                                "class": "T",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "22",
                                "cabin": "ECONOMY",
                                "fareBasis": "TBAU",
                                "class": "T",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "70",
                                "cabin": "ECONOMY",
                                "fareBasis": "KBAU",
                                "class": "K",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "71",
                                "cabin": "ECONOMY",
                                "fareBasis": "KBAU",
                                "class": "K",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "9",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT33H10M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T11:35:00"
                                },
                                "arrival": {
                                    "iataCode": "MNL",
                                    "terminal": "2",
                                    "at": "2022-11-01T16:50:00"
                                },
                                "carrierCode": "PR",
                                "number": "212",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "PR"
                                },
                                "duration": "PT8H15M",
                                "id": "5",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MNL",
                                    "terminal": "1",
                                    "at": "2022-11-02T14:25:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T16:45:00"
                                },
                                "carrierCode": "PR",
                                "number": "736",
                                "aircraft": {
                                    "code": "321"
                                },
                                "operating": {
                                    "carrierCode": "PR"
                                },
                                "duration": "PT3H20M",
                                "id": "6",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT35H50M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T17:55:00"
                                },
                                "arrival": {
                                    "iataCode": "MNL",
                                    "terminal": "2",
                                    "at": "2022-11-20T22:25:00"
                                },
                                "carrierCode": "PR",
                                "number": "737",
                                "aircraft": {
                                    "code": "321"
                                },
                                "operating": {
                                    "carrierCode": "PR"
                                },
                                "duration": "PT3H30M",
                                "id": "70",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MNL",
                                    "terminal": "1",
                                    "at": "2022-11-21T22:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-22T09:45:00"
                                },
                                "carrierCode": "PR",
                                "number": "211",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "PR"
                                },
                                "duration": "PT8H35M",
                                "id": "71",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "610.07",
                    "base": "396.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "610.07"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "PR"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "610.07",
                            "base": "396.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "5",
                                "cabin": "ECONOMY",
                                "fareBasis": "TBAU",
                                "class": "T",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "6",
                                "cabin": "ECONOMY",
                                "fareBasis": "TBAU",
                                "class": "T",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "70",
                                "cabin": "ECONOMY",
                                "fareBasis": "KBAU",
                                "class": "K",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "71",
                                "cabin": "ECONOMY",
                                "fareBasis": "KBAU",
                                "class": "K",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "10",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-07-10",
                "numberOfBookableSeats": 4,
                "itineraries": [
                    {
                        "duration": "PT9H25M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T10:00:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T15:25:00"
                                },
                                "carrierCode": "TG",
                                "number": "476",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "TG"
                                },
                                "duration": "PT9H25M",
                                "id": "11",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT9H20M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T17:50:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T07:10:00"
                                },
                                "carrierCode": "TG",
                                "number": "475",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "TG"
                                },
                                "duration": "PT9H20M",
                                "id": "49",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "626.57",
                    "base": "524.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "626.57"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "TG"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "626.57",
                            "base": "524.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "11",
                                "cabin": "ECONOMY",
                                "fareBasis": "W6LASVC",
                                "class": "W",
                                "includedCheckedBags": {
                                    "weight": 20,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "49",
                                "cabin": "ECONOMY",
                                "fareBasis": "W6LASVC",
                                "class": "W",
                                "includedCheckedBags": {
                                    "weight": 20,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "11",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-07-11",
                "numberOfBookableSeats": 4,
                "itineraries": [
                    {
                        "duration": "PT9H40M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T10:30:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T16:10:00"
                                },
                                "carrierCode": "EK",
                                "number": "5023",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "QF"
                                },
                                "duration": "PT9H40M",
                                "id": "25",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT9H35M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T18:00:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T07:35:00"
                                },
                                "carrierCode": "EK",
                                "number": "5024",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "QF"
                                },
                                "duration": "PT9H35M",
                                "id": "60",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "727.23",
                    "base": "607.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "727.23"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "EK"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "727.23",
                            "base": "607.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "25",
                                "cabin": "ECONOMY",
                                "fareBasis": "LLENPAU1",
                                "brandedFare": "ECOSAVER",
                                "class": "L",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "60",
                                "cabin": "ECONOMY",
                                "fareBasis": "LLENPAU1",
                                "brandedFare": "ECOSAVER",
                                "class": "L",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "12",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-07-10",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT9H25M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T10:00:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T15:25:00"
                                },
                                "carrierCode": "TG",
                                "number": "476",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "TG"
                                },
                                "duration": "PT9H25M",
                                "id": "11",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT9H55M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T07:35:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "at": "2022-11-20T21:30:00"
                                },
                                "carrierCode": "TG",
                                "number": "477",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "TG"
                                },
                                "duration": "PT9H55M",
                                "stops": [
                                    {
                                        "iataCode": "HKT",
                                        "duration": "PT1H10M",
                                        "arrivalAt": "2022-11-20T09:05:00",
                                        "departureAt": "2022-11-20T10:15:00"
                                    }
                                ],
                                "id": "72",
                                "numberOfStops": 1,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "883.57",
                    "base": "781.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "883.57"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "TG"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "883.57",
                            "base": "781.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "11",
                                "cabin": "ECONOMY",
                                "fareBasis": "V6LRSVC",
                                "class": "V",
                                "includedCheckedBags": {
                                    "weight": 20,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "72",
                                "cabin": "ECONOMY",
                                "fareBasis": "Q1LRSVC",
                                "class": "Q",
                                "includedCheckedBags": {
                                    "weight": 20,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "13",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-07-10",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT9H25M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T10:00:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T15:25:00"
                                },
                                "carrierCode": "TG",
                                "number": "476",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "TG"
                                },
                                "duration": "PT9H25M",
                                "id": "11",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT9H45M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T07:45:00"
                                },
                                "arrival": {
                                    "iataCode": "HKT",
                                    "terminal": "D",
                                    "at": "2022-11-20T09:10:00"
                                },
                                "carrierCode": "TG",
                                "number": "2201",
                                "aircraft": {
                                    "code": "320"
                                },
                                "operating": {
                                    "carrierCode": "WE"
                                },
                                "duration": "PT1H25M",
                                "id": "62",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "HKT",
                                    "terminal": "1",
                                    "at": "2022-11-20T10:15:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "at": "2022-11-20T21:30:00"
                                },
                                "carrierCode": "TG",
                                "number": "477",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "TG"
                                },
                                "duration": "PT7H15M",
                                "id": "63",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "917.57",
                    "base": "815.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "917.57"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "TG"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "917.57",
                            "base": "815.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "11",
                                "cabin": "ECONOMY",
                                "fareBasis": "V6LRSVC",
                                "class": "V",
                                "includedCheckedBags": {
                                    "weight": 20,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "62",
                                "cabin": "ECONOMY",
                                "fareBasis": "W1YYOWE",
                                "class": "W",
                                "includedCheckedBags": {
                                    "weight": 20,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "63",
                                "cabin": "ECONOMY",
                                "fareBasis": "Q1LRSVC",
                                "class": "Q",
                                "includedCheckedBags": {
                                    "weight": 20,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "14",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-07-22",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT9H40M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T10:30:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T16:10:00"
                                },
                                "carrierCode": "QF",
                                "number": "23",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "QF"
                                },
                                "duration": "PT9H40M",
                                "id": "26",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT9H35M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T18:00:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T07:35:00"
                                },
                                "carrierCode": "QF",
                                "number": "24",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "QF"
                                },
                                "duration": "PT9H35M",
                                "id": "61",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "960.23",
                    "base": "818.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "960.23"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "QF"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "960.23",
                            "base": "818.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "26",
                                "cabin": "ECONOMY",
                                "fareBasis": "SLATD",
                                "class": "S",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "61",
                                "cabin": "ECONOMY",
                                "fareBasis": "SLATD",
                                "class": "S",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "15",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-07-10",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT12H30M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T11:30:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T21:00:00"
                                },
                                "carrierCode": "TG",
                                "number": "478",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "TG"
                                },
                                "duration": "PT12H30M",
                                "stops": [
                                    {
                                        "iataCode": "HKT",
                                        "duration": "PT1H30M",
                                        "arrivalAt": "2022-11-01T18:00:00",
                                        "departureAt": "2022-11-01T19:30:00"
                                    }
                                ],
                                "id": "14",
                                "numberOfStops": 1,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT9H55M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T07:35:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "at": "2022-11-20T21:30:00"
                                },
                                "carrierCode": "TG",
                                "number": "477",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "TG"
                                },
                                "duration": "PT9H55M",
                                "stops": [
                                    {
                                        "iataCode": "HKT",
                                        "duration": "PT1H10M",
                                        "arrivalAt": "2022-11-20T09:05:00",
                                        "departureAt": "2022-11-20T10:15:00"
                                    }
                                ],
                                "id": "72",
                                "numberOfStops": 1,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1070.57",
                    "base": "968.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1070.57"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "TG"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1070.57",
                            "base": "968.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "14",
                                "cabin": "ECONOMY",
                                "fareBasis": "Q1LRSVC",
                                "class": "Q",
                                "includedCheckedBags": {
                                    "weight": 20,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "72",
                                "cabin": "ECONOMY",
                                "fareBasis": "Q1LRSVC",
                                "class": "Q",
                                "includedCheckedBags": {
                                    "weight": 20,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "16",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT15H40M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T22:10:00"
                                },
                                "arrival": {
                                    "iataCode": "TPE",
                                    "terminal": "2",
                                    "at": "2022-11-02T04:30:00"
                                },
                                "carrierCode": "CI",
                                "number": "52",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "CI"
                                },
                                "duration": "PT9H20M",
                                "id": "29",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "TPE",
                                    "terminal": "1",
                                    "at": "2022-11-02T07:00:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T09:50:00"
                                },
                                "carrierCode": "CI",
                                "number": "833",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "CI"
                                },
                                "duration": "PT3H50M",
                                "id": "30",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT14H25M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T17:50:00"
                                },
                                "arrival": {
                                    "iataCode": "TPE",
                                    "terminal": "1",
                                    "at": "2022-11-20T22:25:00"
                                },
                                "carrierCode": "CI",
                                "number": "836",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "CI"
                                },
                                "duration": "PT3H35M",
                                "id": "50",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "TPE",
                                    "terminal": "2",
                                    "at": "2022-11-20T23:55:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T12:15:00"
                                },
                                "carrierCode": "CI",
                                "number": "51",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "CI"
                                },
                                "duration": "PT9H20M",
                                "id": "51",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "1683.07",
                    "base": "1471.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "1683.07"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "CI"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "1683.07",
                            "base": "1471.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "29",
                                "cabin": "ECONOMY",
                                "fareBasis": "YLAU",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 45,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "30",
                                "cabin": "ECONOMY",
                                "fareBasis": "YLAU",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 45,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "50",
                                "cabin": "ECONOMY",
                                "fareBasis": "TLAU",
                                "class": "T",
                                "includedCheckedBags": {
                                    "weight": 40,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "51",
                                "cabin": "ECONOMY",
                                "fareBasis": "TLAU",
                                "class": "T",
                                "includedCheckedBags": {
                                    "weight": 40,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "17",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-07-11",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT20H45M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T12:25:00"
                                },
                                "arrival": {
                                    "iataCode": "HND",
                                    "at": "2022-11-01T20:00:00"
                                },
                                "carrierCode": "NH",
                                "number": "890",
                                "aircraft": {
                                    "code": "789"
                                },
                                "operating": {
                                    "carrierCode": "NH"
                                },
                                "duration": "PT9H35M",
                                "id": "35",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "HND",
                                    "at": "2022-11-02T00:05:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T05:10:00"
                                },
                                "carrierCode": "NH",
                                "number": "849",
                                "aircraft": {
                                    "code": "789"
                                },
                                "operating": {
                                    "carrierCode": "NH"
                                },
                                "duration": "PT7H5M",
                                "id": "36",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT17H25M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T22:50:00"
                                },
                                "arrival": {
                                    "iataCode": "HND",
                                    "at": "2022-11-21T06:30:00"
                                },
                                "carrierCode": "NH",
                                "number": "850",
                                "aircraft": {
                                    "code": "789"
                                },
                                "operating": {
                                    "carrierCode": "NH"
                                },
                                "duration": "PT5H40M",
                                "id": "54",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "HND",
                                    "at": "2022-11-21T08:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T20:15:00"
                                },
                                "carrierCode": "NH",
                                "number": "889",
                                "aircraft": {
                                    "code": "789"
                                },
                                "operating": {
                                    "carrierCode": "NH"
                                },
                                "duration": "PT9H35M",
                                "id": "55",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "2182.41",
                    "base": "1188.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "2182.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "NH"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "2182.41",
                            "base": "1188.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "35",
                                "cabin": "ECONOMY",
                                "fareBasis": "SRFQ0",
                                "class": "S",
                                "includedCheckedBags": {
                                    "quantity": 2
                                }
                            },
                            {
                                "segmentId": "36",
                                "cabin": "ECONOMY",
                                "fareBasis": "SNCT1",
                                "class": "S",
                                "includedCheckedBags": {
                                    "quantity": 2
                                }
                            },
                            {
                                "segmentId": "54",
                                "cabin": "ECONOMY",
                                "fareBasis": "QNCT1",
                                "class": "Q",
                                "includedCheckedBags": {
                                    "quantity": 2
                                }
                            },
                            {
                                "segmentId": "55",
                                "cabin": "ECONOMY",
                                "fareBasis": "QRFQ0",
                                "class": "Q",
                                "includedCheckedBags": {
                                    "quantity": 2
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "18",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-07-11",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT21H30M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T12:25:00"
                                },
                                "arrival": {
                                    "iataCode": "HND",
                                    "at": "2022-11-01T20:00:00"
                                },
                                "carrierCode": "NH",
                                "number": "890",
                                "aircraft": {
                                    "code": "789"
                                },
                                "operating": {
                                    "carrierCode": "NH"
                                },
                                "duration": "PT9H35M",
                                "id": "17",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "HND",
                                    "at": "2022-11-02T00:50:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T05:55:00"
                                },
                                "carrierCode": "NH",
                                "number": "877",
                                "aircraft": {
                                    "code": "789"
                                },
                                "operating": {
                                    "carrierCode": "NH"
                                },
                                "duration": "PT7H5M",
                                "id": "18",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT17H25M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T22:50:00"
                                },
                                "arrival": {
                                    "iataCode": "HND",
                                    "at": "2022-11-21T06:30:00"
                                },
                                "carrierCode": "NH",
                                "number": "850",
                                "aircraft": {
                                    "code": "789"
                                },
                                "operating": {
                                    "carrierCode": "NH"
                                },
                                "duration": "PT5H40M",
                                "id": "54",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "HND",
                                    "at": "2022-11-21T08:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T20:15:00"
                                },
                                "carrierCode": "NH",
                                "number": "889",
                                "aircraft": {
                                    "code": "789"
                                },
                                "operating": {
                                    "carrierCode": "NH"
                                },
                                "duration": "PT9H35M",
                                "id": "55",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "2182.41",
                    "base": "1188.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "2182.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "NH"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "2182.41",
                            "base": "1188.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "17",
                                "cabin": "ECONOMY",
                                "fareBasis": "SRFQ0",
                                "class": "S",
                                "includedCheckedBags": {
                                    "quantity": 2
                                }
                            },
                            {
                                "segmentId": "18",
                                "cabin": "ECONOMY",
                                "fareBasis": "SNCT1",
                                "class": "S",
                                "includedCheckedBags": {
                                    "quantity": 2
                                }
                            },
                            {
                                "segmentId": "54",
                                "cabin": "ECONOMY",
                                "fareBasis": "QNCT1",
                                "class": "Q",
                                "includedCheckedBags": {
                                    "quantity": 2
                                }
                            },
                            {
                                "segmentId": "55",
                                "cabin": "ECONOMY",
                                "fareBasis": "QRFQ0",
                                "class": "Q",
                                "includedCheckedBags": {
                                    "quantity": 2
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "19",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-07-08",
                "numberOfBookableSeats": 4,
                "itineraries": [
                    {
                        "duration": "PT21H",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T12:25:00"
                                },
                                "arrival": {
                                    "iataCode": "HND",
                                    "at": "2022-11-01T20:00:00"
                                },
                                "carrierCode": "NH",
                                "number": "890",
                                "aircraft": {
                                    "code": "789"
                                },
                                "operating": {
                                    "carrierCode": "NH"
                                },
                                "duration": "PT9H35M",
                                "id": "3",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "HND",
                                    "terminal": "3",
                                    "at": "2022-11-02T00:20:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T05:25:00"
                                },
                                "carrierCode": "NH",
                                "number": "5965",
                                "aircraft": {
                                    "code": "789"
                                },
                                "operating": {
                                    "carrierCode": "TG"
                                },
                                "duration": "PT7H5M",
                                "id": "4",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT17H25M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T22:50:00"
                                },
                                "arrival": {
                                    "iataCode": "HND",
                                    "at": "2022-11-21T06:30:00"
                                },
                                "carrierCode": "NH",
                                "number": "850",
                                "aircraft": {
                                    "code": "789"
                                },
                                "operating": {
                                    "carrierCode": "NH"
                                },
                                "duration": "PT5H40M",
                                "id": "54",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "HND",
                                    "at": "2022-11-21T08:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T20:15:00"
                                },
                                "carrierCode": "NH",
                                "number": "889",
                                "aircraft": {
                                    "code": "789"
                                },
                                "operating": {
                                    "carrierCode": "NH"
                                },
                                "duration": "PT9H35M",
                                "id": "55",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "2806.41",
                    "base": "1812.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "2806.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "NH"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "2806.41",
                            "base": "1812.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "3",
                                "cabin": "ECONOMY",
                                "fareBasis": "KRFQ09",
                                "class": "K",
                                "includedCheckedBags": {
                                    "quantity": 2
                                }
                            },
                            {
                                "segmentId": "4",
                                "cabin": "ECONOMY",
                                "fareBasis": "MXRCT1",
                                "class": "M",
                                "includedCheckedBags": {
                                    "quantity": 2
                                }
                            },
                            {
                                "segmentId": "54",
                                "cabin": "ECONOMY",
                                "fareBasis": "QRCT1",
                                "class": "Q",
                                "includedCheckedBags": {
                                    "quantity": 2
                                }
                            },
                            {
                                "segmentId": "55",
                                "cabin": "ECONOMY",
                                "fareBasis": "QRFQ0",
                                "class": "Q",
                                "includedCheckedBags": {
                                    "quantity": 2
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "20",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT24H30M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T22:00:00"
                                },
                                "arrival": {
                                    "iataCode": "DOH",
                                    "at": "2022-11-02T04:50:00"
                                },
                                "carrierCode": "QR",
                                "number": "909",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "QR"
                                },
                                "duration": "PT14H50M",
                                "id": "19",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "DOH",
                                    "at": "2022-11-02T08:10:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T18:30:00"
                                },
                                "carrierCode": "QR",
                                "number": "838",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "QR"
                                },
                                "duration": "PT6H20M",
                                "id": "20",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT29H25M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T09:20:00"
                                },
                                "arrival": {
                                    "iataCode": "DOH",
                                    "at": "2022-11-20T12:45:00"
                                },
                                "carrierCode": "QR",
                                "number": "831",
                                "aircraft": {
                                    "code": "788"
                                },
                                "operating": {
                                    "carrierCode": "QR"
                                },
                                "duration": "PT7H25M",
                                "id": "56",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "DOH",
                                    "at": "2022-11-20T20:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T18:45:00"
                                },
                                "carrierCode": "QR",
                                "number": "908",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "QR"
                                },
                                "duration": "PT14H5M",
                                "id": "57",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "3772.05",
                    "base": "2813.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "3772.05"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "QR"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "3772.05",
                            "base": "2813.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "19",
                                "cabin": "ECONOMY",
                                "fareBasis": "HJAUR1FE",
                                "class": "H",
                                "includedCheckedBags": {
                                    "weight": 35,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "20",
                                "cabin": "ECONOMY",
                                "fareBasis": "HJAUR1FE",
                                "brandedFare": "ECOMFORT",
                                "class": "H",
                                "includedCheckedBags": {
                                    "weight": 35,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "56",
                                "cabin": "ECONOMY",
                                "fareBasis": "HJAUR1FE",
                                "class": "H",
                                "includedCheckedBags": {
                                    "weight": 35,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "57",
                                "cabin": "ECONOMY",
                                "fareBasis": "HJAUR1FE",
                                "brandedFare": "ECOMFORT",
                                "class": "H",
                                "includedCheckedBags": {
                                    "weight": 35,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "21",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT36H30M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T22:00:00"
                                },
                                "arrival": {
                                    "iataCode": "DOH",
                                    "at": "2022-11-02T04:50:00"
                                },
                                "carrierCode": "QR",
                                "number": "909",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "QR"
                                },
                                "duration": "PT14H50M",
                                "id": "23",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "DOH",
                                    "at": "2022-11-02T20:10:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-03T06:30:00"
                                },
                                "carrierCode": "QR",
                                "number": "830",
                                "aircraft": {
                                    "code": "788"
                                },
                                "operating": {
                                    "carrierCode": "QR"
                                },
                                "duration": "PT6H20M",
                                "id": "24",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT29H25M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T09:20:00"
                                },
                                "arrival": {
                                    "iataCode": "DOH",
                                    "at": "2022-11-20T12:45:00"
                                },
                                "carrierCode": "QR",
                                "number": "831",
                                "aircraft": {
                                    "code": "788"
                                },
                                "operating": {
                                    "carrierCode": "QR"
                                },
                                "duration": "PT7H25M",
                                "id": "56",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "DOH",
                                    "at": "2022-11-20T20:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T18:45:00"
                                },
                                "carrierCode": "QR",
                                "number": "908",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "QR"
                                },
                                "duration": "PT14H5M",
                                "id": "57",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "3775.51",
                    "base": "2813.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "3775.51"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "QR"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "3775.51",
                            "base": "2813.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "23",
                                "cabin": "ECONOMY",
                                "fareBasis": "HJAUR1FE",
                                "class": "H",
                                "includedCheckedBags": {
                                    "weight": 35,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "24",
                                "cabin": "ECONOMY",
                                "fareBasis": "HJAUR1FE",
                                "brandedFare": "ECOMFORT",
                                "class": "H",
                                "includedCheckedBags": {
                                    "weight": 35,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "56",
                                "cabin": "ECONOMY",
                                "fareBasis": "HJAUR1FE",
                                "class": "H",
                                "includedCheckedBags": {
                                    "weight": 35,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "57",
                                "cabin": "ECONOMY",
                                "fareBasis": "HJAUR1FE",
                                "brandedFare": "ECOMFORT",
                                "class": "H",
                                "includedCheckedBags": {
                                    "weight": 35,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "22",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT42H40M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T22:00:00"
                                },
                                "arrival": {
                                    "iataCode": "DOH",
                                    "at": "2022-11-02T04:50:00"
                                },
                                "carrierCode": "QR",
                                "number": "909",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "QR"
                                },
                                "duration": "PT14H50M",
                                "id": "31",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "DOH",
                                    "at": "2022-11-03T02:20:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-03T12:40:00"
                                },
                                "carrierCode": "QR",
                                "number": "36",
                                "aircraft": {
                                    "code": "77L"
                                },
                                "operating": {
                                    "carrierCode": "QR"
                                },
                                "duration": "PT6H20M",
                                "id": "32",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT29H25M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T09:20:00"
                                },
                                "arrival": {
                                    "iataCode": "DOH",
                                    "at": "2022-11-20T12:45:00"
                                },
                                "carrierCode": "QR",
                                "number": "831",
                                "aircraft": {
                                    "code": "788"
                                },
                                "operating": {
                                    "carrierCode": "QR"
                                },
                                "duration": "PT7H25M",
                                "id": "56",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "DOH",
                                    "at": "2022-11-20T20:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T18:45:00"
                                },
                                "carrierCode": "QR",
                                "number": "908",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "QR"
                                },
                                "duration": "PT14H5M",
                                "id": "57",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "3775.51",
                    "base": "2813.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "3775.51"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "QR"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "3775.51",
                            "base": "2813.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "31",
                                "cabin": "ECONOMY",
                                "fareBasis": "HJAUR1FE",
                                "class": "H",
                                "includedCheckedBags": {
                                    "weight": 35,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "32",
                                "cabin": "ECONOMY",
                                "fareBasis": "HJAUR1FE",
                                "brandedFare": "ECOMFORT",
                                "class": "H",
                                "includedCheckedBags": {
                                    "weight": 35,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "56",
                                "cabin": "ECONOMY",
                                "fareBasis": "HJAUR1FE",
                                "class": "H",
                                "includedCheckedBags": {
                                    "weight": 35,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "57",
                                "cabin": "ECONOMY",
                                "fareBasis": "HJAUR1FE",
                                "brandedFare": "ECOMFORT",
                                "class": "H",
                                "includedCheckedBags": {
                                    "weight": 35,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "23",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-08-07",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT9H25M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T10:00:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T15:25:00"
                                },
                                "carrierCode": "TG",
                                "number": "476",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "TG"
                                },
                                "duration": "PT9H25M",
                                "id": "11",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT9H35M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T18:00:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T07:35:00"
                                },
                                "carrierCode": "QF",
                                "number": "24",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "QF"
                                },
                                "duration": "PT9H35M",
                                "id": "61",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "3796.40",
                    "base": "3674.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "3796.40"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "TG"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "3796.40",
                            "base": "3674.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "11",
                                "cabin": "ECONOMY",
                                "fareBasis": "Y1YRTG",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "61",
                                "cabin": "ECONOMY",
                                "fareBasis": "YRT",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "24",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-08-07",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT12H30M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T11:30:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T21:00:00"
                                },
                                "carrierCode": "TG",
                                "number": "478",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "TG"
                                },
                                "duration": "PT12H30M",
                                "stops": [
                                    {
                                        "iataCode": "HKT",
                                        "duration": "PT1H30M",
                                        "arrivalAt": "2022-11-01T18:00:00",
                                        "departureAt": "2022-11-01T19:30:00"
                                    }
                                ],
                                "id": "14",
                                "numberOfStops": 1,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT9H35M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T18:00:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T07:35:00"
                                },
                                "carrierCode": "QF",
                                "number": "24",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "QF"
                                },
                                "duration": "PT9H35M",
                                "id": "61",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "3796.40",
                    "base": "3674.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "3796.40"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "TG"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "3796.40",
                            "base": "3674.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "14",
                                "cabin": "ECONOMY",
                                "fareBasis": "Y1YRTG",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "61",
                                "cabin": "ECONOMY",
                                "fareBasis": "YRT",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "25",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-08-07",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT9H40M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T10:30:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T16:10:00"
                                },
                                "carrierCode": "QF",
                                "number": "23",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "QF"
                                },
                                "duration": "PT9H40M",
                                "id": "26",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT9H55M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T07:35:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "at": "2022-11-20T21:30:00"
                                },
                                "carrierCode": "TG",
                                "number": "477",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "TG"
                                },
                                "duration": "PT9H55M",
                                "stops": [
                                    {
                                        "iataCode": "HKT",
                                        "duration": "PT1H10M",
                                        "arrivalAt": "2022-11-20T09:05:00",
                                        "departureAt": "2022-11-20T10:15:00"
                                    }
                                ],
                                "id": "72",
                                "numberOfStops": 1,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "3796.40",
                    "base": "3674.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "3796.40"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "QF"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "3796.40",
                            "base": "3674.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "26",
                                "cabin": "ECONOMY",
                                "fareBasis": "YRT",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "72",
                                "cabin": "ECONOMY",
                                "fareBasis": "Y1YRTG",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "26",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT11H45M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T12:15:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-01T17:35:00"
                                },
                                "carrierCode": "SQ",
                                "number": "232",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H20M",
                                "id": "33",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-01T18:35:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T20:00:00"
                                },
                                "carrierCode": "SQ",
                                "number": "720",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H25M",
                                "id": "34",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT11H50M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T20:00:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T23:30:00"
                                },
                                "carrierCode": "SQ",
                                "number": "713",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "68",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-21T00:45:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T11:50:00"
                                },
                                "carrierCode": "SQ",
                                "number": "231",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H5M",
                                "id": "69",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "33",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "34",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "68",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "69",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "27",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT11H55M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T09:05:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-01T14:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "212",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "39",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-01T15:25:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T17:00:00"
                                },
                                "carrierCode": "SQ",
                                "number": "712",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H35M",
                                "id": "40",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT11H50M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T20:00:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T23:30:00"
                                },
                                "carrierCode": "SQ",
                                "number": "713",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "68",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-21T00:45:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T11:50:00"
                                },
                                "carrierCode": "SQ",
                                "number": "231",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H5M",
                                "id": "69",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "39",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "40",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "68",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "69",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "28",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT11H45M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T12:15:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-01T17:35:00"
                                },
                                "carrierCode": "SQ",
                                "number": "232",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H20M",
                                "id": "33",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-01T18:35:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T20:00:00"
                                },
                                "carrierCode": "SQ",
                                "number": "720",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H25M",
                                "id": "34",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT12H",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T15:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T19:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "709",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H35M",
                                "id": "43",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-20T20:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T07:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "221",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H",
                                "id": "44",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "33",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "34",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "43",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "44",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "29",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT11H55M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T09:05:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-01T14:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "212",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "39",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-01T15:25:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T17:00:00"
                                },
                                "carrierCode": "SQ",
                                "number": "712",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H35M",
                                "id": "40",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT12H",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T15:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T19:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "709",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H35M",
                                "id": "43",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-20T20:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T07:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "221",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H",
                                "id": "44",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "39",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "40",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "43",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "44",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "30",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT13H40M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T09:05:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-01T14:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "212",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "27",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-01T17:10:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T18:45:00"
                                },
                                "carrierCode": "SQ",
                                "number": "714",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H35M",
                                "id": "28",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT11H50M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T20:00:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T23:30:00"
                                },
                                "carrierCode": "SQ",
                                "number": "713",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "68",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-21T00:45:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T11:50:00"
                                },
                                "carrierCode": "SQ",
                                "number": "231",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H5M",
                                "id": "69",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "27",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "28",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "68",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "69",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "31",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT11H45M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T12:15:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-01T17:35:00"
                                },
                                "carrierCode": "SQ",
                                "number": "232",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H20M",
                                "id": "33",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-01T18:35:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T20:00:00"
                                },
                                "carrierCode": "SQ",
                                "number": "720",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H25M",
                                "id": "34",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT13H45M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T18:05:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T21:35:00"
                                },
                                "carrierCode": "SQ",
                                "number": "711",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "64",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-21T00:45:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T11:50:00"
                                },
                                "carrierCode": "SQ",
                                "number": "231",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H5M",
                                "id": "65",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "33",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "34",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "64",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "65",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "32",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT13H40M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T09:05:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-01T14:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "212",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "27",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-01T17:10:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T18:45:00"
                                },
                                "carrierCode": "SQ",
                                "number": "714",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H35M",
                                "id": "28",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT12H",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T15:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T19:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "709",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H35M",
                                "id": "43",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-20T20:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T07:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "221",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H",
                                "id": "44",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "27",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "28",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "43",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "44",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "33",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT11H55M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T09:05:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-01T14:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "212",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "39",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-01T15:25:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T17:00:00"
                                },
                                "carrierCode": "SQ",
                                "number": "712",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H35M",
                                "id": "40",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT13H45M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T18:05:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T21:35:00"
                                },
                                "carrierCode": "SQ",
                                "number": "711",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "64",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-21T00:45:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T11:50:00"
                                },
                                "carrierCode": "SQ",
                                "number": "231",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H5M",
                                "id": "65",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "39",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "40",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "64",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "65",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "34",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT14H55M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T09:05:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-01T14:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "212",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "41",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-01T18:35:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T20:00:00"
                                },
                                "carrierCode": "SQ",
                                "number": "720",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H25M",
                                "id": "42",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT11H50M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T20:00:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T23:30:00"
                                },
                                "carrierCode": "SQ",
                                "number": "713",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "68",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-21T00:45:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T11:50:00"
                                },
                                "carrierCode": "SQ",
                                "number": "231",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H5M",
                                "id": "69",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "41",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "42",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "68",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "69",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "35",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT14H55M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T09:05:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-01T14:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "212",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "41",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-01T18:35:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T20:00:00"
                                },
                                "carrierCode": "SQ",
                                "number": "720",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H25M",
                                "id": "42",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT12H",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T15:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T19:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "709",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H35M",
                                "id": "43",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-20T20:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T07:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "221",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H",
                                "id": "44",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "41",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "42",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "43",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "44",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "36",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT11H45M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T12:15:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-01T17:35:00"
                                },
                                "carrierCode": "SQ",
                                "number": "232",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H20M",
                                "id": "33",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-01T18:35:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T20:00:00"
                                },
                                "carrierCode": "SQ",
                                "number": "720",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H25M",
                                "id": "34",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT15H25M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T12:15:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T15:45:00"
                                },
                                "carrierCode": "SQ",
                                "number": "707",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "52",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-20T20:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T07:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "221",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H",
                                "id": "53",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "33",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "34",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "52",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "53",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "37",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT11H55M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T09:05:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-01T14:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "212",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "39",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-01T15:25:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T17:00:00"
                                },
                                "carrierCode": "SQ",
                                "number": "712",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H35M",
                                "id": "40",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT15H25M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T12:15:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T15:45:00"
                                },
                                "carrierCode": "SQ",
                                "number": "707",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "52",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-20T20:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T07:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "221",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H",
                                "id": "53",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "39",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "40",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "52",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "53",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "38",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT13H40M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T09:05:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-01T14:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "212",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "27",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-01T17:10:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T18:45:00"
                                },
                                "carrierCode": "SQ",
                                "number": "714",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H35M",
                                "id": "28",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT13H45M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T18:05:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T21:35:00"
                                },
                                "carrierCode": "SQ",
                                "number": "711",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "64",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-21T00:45:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T11:50:00"
                                },
                                "carrierCode": "SQ",
                                "number": "231",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H5M",
                                "id": "65",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "27",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "28",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "64",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "65",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "39",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT11H45M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T12:15:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-01T17:35:00"
                                },
                                "carrierCode": "SQ",
                                "number": "232",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H20M",
                                "id": "33",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-01T18:35:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T20:00:00"
                                },
                                "carrierCode": "SQ",
                                "number": "720",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H25M",
                                "id": "34",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT16H10M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T15:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T19:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "709",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H35M",
                                "id": "45",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-21T00:45:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T11:50:00"
                                },
                                "carrierCode": "SQ",
                                "number": "231",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H5M",
                                "id": "46",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "33",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "34",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "45",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "40",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT11H55M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T09:05:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-01T14:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "212",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "39",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-01T15:25:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T17:00:00"
                                },
                                "carrierCode": "SQ",
                                "number": "712",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H35M",
                                "id": "40",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT16H10M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T15:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T19:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "709",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H35M",
                                "id": "45",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-21T00:45:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T11:50:00"
                                },
                                "carrierCode": "SQ",
                                "number": "231",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H5M",
                                "id": "46",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "39",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "40",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "45",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "41",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT11H45M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T12:15:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-01T17:35:00"
                                },
                                "carrierCode": "SQ",
                                "number": "232",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H20M",
                                "id": "33",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-01T18:35:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T20:00:00"
                                },
                                "carrierCode": "SQ",
                                "number": "720",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H25M",
                                "id": "34",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT16H45M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T21:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-21T00:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "719",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "66",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-21T07:05:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T17:55:00"
                                },
                                "carrierCode": "SQ",
                                "number": "241",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT7H50M",
                                "id": "67",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "33",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "34",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "66",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "67",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "42",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT14H55M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T09:05:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-01T14:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "212",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "41",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-01T18:35:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T20:00:00"
                                },
                                "carrierCode": "SQ",
                                "number": "720",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H25M",
                                "id": "42",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT13H45M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T18:05:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T21:35:00"
                                },
                                "carrierCode": "SQ",
                                "number": "711",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "64",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-21T00:45:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T11:50:00"
                                },
                                "carrierCode": "SQ",
                                "number": "231",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H5M",
                                "id": "65",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "41",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "42",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "64",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "65",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "43",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT11H55M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T09:05:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-01T14:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "212",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "39",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-01T15:25:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T17:00:00"
                                },
                                "carrierCode": "SQ",
                                "number": "712",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H35M",
                                "id": "40",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT16H45M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T21:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-21T00:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "719",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "66",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-21T07:05:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T17:55:00"
                                },
                                "carrierCode": "SQ",
                                "number": "241",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT7H50M",
                                "id": "67",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "39",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "40",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "66",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "67",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "44",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT13H40M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T09:05:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-01T14:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "212",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "27",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-01T17:10:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T18:45:00"
                                },
                                "carrierCode": "SQ",
                                "number": "714",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H35M",
                                "id": "28",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT15H25M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T12:15:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T15:45:00"
                                },
                                "carrierCode": "SQ",
                                "number": "707",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "52",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-20T20:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T07:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "221",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H",
                                "id": "53",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "27",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "28",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "52",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "53",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "45",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT17H30M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T19:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-02T00:20:00"
                                },
                                "carrierCode": "SQ",
                                "number": "242",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "15",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-02T07:15:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T08:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "706",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H25M",
                                "id": "16",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT11H50M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T20:00:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T23:30:00"
                                },
                                "carrierCode": "SQ",
                                "number": "713",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "68",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-21T00:45:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T11:50:00"
                                },
                                "carrierCode": "SQ",
                                "number": "231",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H5M",
                                "id": "69",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "15",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "16",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "68",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "69",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "46",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT17H30M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T19:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-02T00:20:00"
                                },
                                "carrierCode": "SQ",
                                "number": "242",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "15",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-02T07:15:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T08:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "706",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H25M",
                                "id": "16",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT12H",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T15:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T19:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "709",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H35M",
                                "id": "43",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-20T20:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T07:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "221",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H",
                                "id": "44",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "15",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "16",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "43",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "44",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "47",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT11H45M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T12:15:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-01T17:35:00"
                                },
                                "carrierCode": "SQ",
                                "number": "232",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H20M",
                                "id": "33",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-01T18:35:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T20:00:00"
                                },
                                "carrierCode": "SQ",
                                "number": "720",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H25M",
                                "id": "34",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT17H55M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T09:45:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T13:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "705",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "73",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-20T20:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T07:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "221",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H",
                                "id": "74",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "33",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "34",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "73",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "74",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "48",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT11H55M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T09:05:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-01T14:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "212",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "39",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-01T15:25:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T17:00:00"
                                },
                                "carrierCode": "SQ",
                                "number": "712",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H35M",
                                "id": "40",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT17H55M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T09:45:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T13:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "705",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "73",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-20T20:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T07:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "221",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H",
                                "id": "74",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "39",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "40",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "73",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "74",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "49",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT13H40M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T09:05:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-01T14:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "212",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "27",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-01T17:10:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T18:45:00"
                                },
                                "carrierCode": "SQ",
                                "number": "714",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H35M",
                                "id": "28",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT16H10M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T15:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T19:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "709",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H35M",
                                "id": "45",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-21T00:45:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T11:50:00"
                                },
                                "carrierCode": "SQ",
                                "number": "231",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H5M",
                                "id": "46",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "27",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "28",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "45",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "50",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT14H55M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T09:05:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-01T14:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "212",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "41",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-01T18:35:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T20:00:00"
                                },
                                "carrierCode": "SQ",
                                "number": "720",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H25M",
                                "id": "42",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT15H25M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T12:15:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T15:45:00"
                                },
                                "carrierCode": "SQ",
                                "number": "707",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "52",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-20T20:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T07:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "221",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H",
                                "id": "53",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "41",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "42",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "52",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "53",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "51",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT13H40M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T09:05:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-01T14:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "212",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "27",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-01T17:10:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T18:45:00"
                                },
                                "carrierCode": "SQ",
                                "number": "714",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H35M",
                                "id": "28",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT16H45M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T21:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-21T00:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "719",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "66",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-21T07:05:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T17:55:00"
                                },
                                "carrierCode": "SQ",
                                "number": "241",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT7H50M",
                                "id": "67",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "27",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "28",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "66",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "67",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "52",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT14H55M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T09:05:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-01T14:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "212",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "41",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-01T18:35:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T20:00:00"
                                },
                                "carrierCode": "SQ",
                                "number": "720",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H25M",
                                "id": "42",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT16H10M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T15:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T19:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "709",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H35M",
                                "id": "45",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-21T00:45:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T11:50:00"
                                },
                                "carrierCode": "SQ",
                                "number": "231",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H5M",
                                "id": "46",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "41",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "42",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "45",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "53",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT17H30M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T19:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-02T00:20:00"
                                },
                                "carrierCode": "SQ",
                                "number": "242",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "15",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-02T07:15:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T08:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "706",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H25M",
                                "id": "16",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT13H45M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T18:05:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T21:35:00"
                                },
                                "carrierCode": "SQ",
                                "number": "711",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "64",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-21T00:45:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T11:50:00"
                                },
                                "carrierCode": "SQ",
                                "number": "231",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H5M",
                                "id": "65",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "15",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "16",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "64",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "65",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "54",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT13H40M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T09:05:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-01T14:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "212",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "27",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-01T17:10:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T18:45:00"
                                },
                                "carrierCode": "SQ",
                                "number": "714",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H35M",
                                "id": "28",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT17H55M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T09:45:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T13:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "705",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "73",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-20T20:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T07:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "221",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H",
                                "id": "74",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "27",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "28",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "73",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "74",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "55",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT14H55M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T09:05:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-01T14:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "212",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "41",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-01T18:35:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T20:00:00"
                                },
                                "carrierCode": "SQ",
                                "number": "720",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H25M",
                                "id": "42",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT16H45M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T21:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-21T00:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "719",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "66",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-21T07:05:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T17:55:00"
                                },
                                "carrierCode": "SQ",
                                "number": "241",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT7H50M",
                                "id": "67",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "41",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "42",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "66",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "67",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "56",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT20H",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T19:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-02T00:20:00"
                                },
                                "carrierCode": "SQ",
                                "number": "242",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "1",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-02T09:45:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T11:10:00"
                                },
                                "carrierCode": "SQ",
                                "number": "708",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H25M",
                                "id": "2",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT11H50M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T20:00:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T23:30:00"
                                },
                                "carrierCode": "SQ",
                                "number": "713",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "68",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-21T00:45:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T11:50:00"
                                },
                                "carrierCode": "SQ",
                                "number": "231",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H5M",
                                "id": "69",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "1",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "2",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "68",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "69",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "57",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT20H",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T19:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-02T00:20:00"
                                },
                                "carrierCode": "SQ",
                                "number": "242",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "1",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-02T09:45:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T11:10:00"
                                },
                                "carrierCode": "SQ",
                                "number": "708",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H25M",
                                "id": "2",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT12H",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T15:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T19:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "709",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H35M",
                                "id": "43",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-20T20:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T07:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "221",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H",
                                "id": "44",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "1",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "2",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "43",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "44",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "58",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT14H55M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T09:05:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-01T14:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "212",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "41",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-01T18:35:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-01T20:00:00"
                                },
                                "carrierCode": "SQ",
                                "number": "720",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H25M",
                                "id": "42",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT17H55M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T09:45:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T13:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "705",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "73",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-20T20:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T07:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "221",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H",
                                "id": "74",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "41",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "42",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "73",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "74",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "59",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT17H30M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T19:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-02T00:20:00"
                                },
                                "carrierCode": "SQ",
                                "number": "242",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "15",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-02T07:15:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T08:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "706",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H25M",
                                "id": "16",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT15H25M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T12:15:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T15:45:00"
                                },
                                "carrierCode": "SQ",
                                "number": "707",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "52",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-20T20:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T07:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "221",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H",
                                "id": "53",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "15",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "16",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "52",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "53",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "60",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT17H30M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T19:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-02T00:20:00"
                                },
                                "carrierCode": "SQ",
                                "number": "242",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "15",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-02T07:15:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T08:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "706",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H25M",
                                "id": "16",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT16H10M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T15:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T19:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "709",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H35M",
                                "id": "45",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-21T00:45:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T11:50:00"
                                },
                                "carrierCode": "SQ",
                                "number": "231",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H5M",
                                "id": "46",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "15",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "16",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "45",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "61",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT20H",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T19:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-02T00:20:00"
                                },
                                "carrierCode": "SQ",
                                "number": "242",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "1",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-02T09:45:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T11:10:00"
                                },
                                "carrierCode": "SQ",
                                "number": "708",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H25M",
                                "id": "2",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT13H45M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T18:05:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T21:35:00"
                                },
                                "carrierCode": "SQ",
                                "number": "711",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "64",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-21T00:45:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T11:50:00"
                                },
                                "carrierCode": "SQ",
                                "number": "231",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H5M",
                                "id": "65",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "1",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "2",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "64",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "65",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "62",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT17H30M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T19:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-02T00:20:00"
                                },
                                "carrierCode": "SQ",
                                "number": "242",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "15",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-02T07:15:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T08:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "706",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H25M",
                                "id": "16",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT16H45M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T21:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-21T00:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "719",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "66",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-21T07:05:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T17:55:00"
                                },
                                "carrierCode": "SQ",
                                "number": "241",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT7H50M",
                                "id": "67",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "15",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "16",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "66",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "67",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "63",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT23H25M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T19:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-02T00:20:00"
                                },
                                "carrierCode": "SQ",
                                "number": "242",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "12",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-02T13:05:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T14:35:00"
                                },
                                "carrierCode": "SQ",
                                "number": "710",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "13",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT11H50M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T20:00:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T23:30:00"
                                },
                                "carrierCode": "SQ",
                                "number": "713",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "68",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-21T00:45:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T11:50:00"
                                },
                                "carrierCode": "SQ",
                                "number": "231",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H5M",
                                "id": "69",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "12",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "13",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "68",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "69",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "64",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT17H30M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T19:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-02T00:20:00"
                                },
                                "carrierCode": "SQ",
                                "number": "242",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "15",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-02T07:15:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T08:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "706",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H25M",
                                "id": "16",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT17H55M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T09:45:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T13:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "705",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "73",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-20T20:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T07:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "221",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H",
                                "id": "74",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "15",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "16",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "73",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "74",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "65",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT20H",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T19:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-02T00:20:00"
                                },
                                "carrierCode": "SQ",
                                "number": "242",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "1",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-02T09:45:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T11:10:00"
                                },
                                "carrierCode": "SQ",
                                "number": "708",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H25M",
                                "id": "2",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT15H25M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T12:15:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T15:45:00"
                                },
                                "carrierCode": "SQ",
                                "number": "707",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "52",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-20T20:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T07:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "221",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H",
                                "id": "53",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "1",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "2",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "52",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "53",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "66",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT23H25M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T19:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-02T00:20:00"
                                },
                                "carrierCode": "SQ",
                                "number": "242",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "12",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-02T13:05:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T14:35:00"
                                },
                                "carrierCode": "SQ",
                                "number": "710",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "13",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT12H",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T15:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T19:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "709",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H35M",
                                "id": "43",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-20T20:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T07:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "221",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H",
                                "id": "44",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "12",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "13",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "43",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "44",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "67",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT20H",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T19:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-02T00:20:00"
                                },
                                "carrierCode": "SQ",
                                "number": "242",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "1",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-02T09:45:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T11:10:00"
                                },
                                "carrierCode": "SQ",
                                "number": "708",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H25M",
                                "id": "2",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT16H10M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T15:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T19:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "709",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H35M",
                                "id": "45",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-21T00:45:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T11:50:00"
                                },
                                "carrierCode": "SQ",
                                "number": "231",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H5M",
                                "id": "46",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "1",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "2",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "45",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "68",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT20H",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T19:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-02T00:20:00"
                                },
                                "carrierCode": "SQ",
                                "number": "242",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "1",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-02T09:45:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T11:10:00"
                                },
                                "carrierCode": "SQ",
                                "number": "708",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H25M",
                                "id": "2",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT16H45M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T21:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-21T00:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "719",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "66",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-21T07:05:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T17:55:00"
                                },
                                "carrierCode": "SQ",
                                "number": "241",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT7H50M",
                                "id": "67",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "1",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "2",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "66",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "67",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "69",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT23H25M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T19:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-02T00:20:00"
                                },
                                "carrierCode": "SQ",
                                "number": "242",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "12",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-02T13:05:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T14:35:00"
                                },
                                "carrierCode": "SQ",
                                "number": "710",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "13",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT13H45M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T18:05:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T21:35:00"
                                },
                                "carrierCode": "SQ",
                                "number": "711",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "64",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-21T00:45:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T11:50:00"
                                },
                                "carrierCode": "SQ",
                                "number": "231",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H5M",
                                "id": "65",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "12",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "13",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "64",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "65",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "70",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT25H50M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T19:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-02T00:20:00"
                                },
                                "carrierCode": "SQ",
                                "number": "242",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "37",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-02T15:25:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T17:00:00"
                                },
                                "carrierCode": "SQ",
                                "number": "712",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H35M",
                                "id": "38",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT11H50M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T20:00:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T23:30:00"
                                },
                                "carrierCode": "SQ",
                                "number": "713",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "68",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-21T00:45:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T11:50:00"
                                },
                                "carrierCode": "SQ",
                                "number": "231",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H5M",
                                "id": "69",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "37",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "38",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "68",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "69",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "71",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT25H50M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T19:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-02T00:20:00"
                                },
                                "carrierCode": "SQ",
                                "number": "242",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "37",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-02T15:25:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T17:00:00"
                                },
                                "carrierCode": "SQ",
                                "number": "712",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H35M",
                                "id": "38",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT12H",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T15:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T19:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "709",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H35M",
                                "id": "43",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-20T20:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T07:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "221",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H",
                                "id": "44",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "37",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "38",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "43",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "44",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "72",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT20H",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T19:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-02T00:20:00"
                                },
                                "carrierCode": "SQ",
                                "number": "242",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "1",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-02T09:45:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T11:10:00"
                                },
                                "carrierCode": "SQ",
                                "number": "708",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H25M",
                                "id": "2",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT17H55M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T09:45:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T13:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "705",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "73",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-20T20:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T07:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "221",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H",
                                "id": "74",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "1",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "2",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "73",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "74",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "73",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT23H25M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T19:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-02T00:20:00"
                                },
                                "carrierCode": "SQ",
                                "number": "242",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "12",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-02T13:05:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T14:35:00"
                                },
                                "carrierCode": "SQ",
                                "number": "710",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "13",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT15H25M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T12:15:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T15:45:00"
                                },
                                "carrierCode": "SQ",
                                "number": "707",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "52",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-20T20:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T07:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "221",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H",
                                "id": "53",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "12",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "13",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "52",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "53",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "74",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT23H25M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T19:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-02T00:20:00"
                                },
                                "carrierCode": "SQ",
                                "number": "242",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "12",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-02T13:05:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T14:35:00"
                                },
                                "carrierCode": "SQ",
                                "number": "710",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "13",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT16H10M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T15:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T19:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "709",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H35M",
                                "id": "45",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-21T00:45:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T11:50:00"
                                },
                                "carrierCode": "SQ",
                                "number": "231",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H5M",
                                "id": "46",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "12",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "13",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "45",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "75",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT25H50M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T19:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-02T00:20:00"
                                },
                                "carrierCode": "SQ",
                                "number": "242",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "37",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-02T15:25:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T17:00:00"
                                },
                                "carrierCode": "SQ",
                                "number": "712",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H35M",
                                "id": "38",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT13H45M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T18:05:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T21:35:00"
                                },
                                "carrierCode": "SQ",
                                "number": "711",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "64",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-21T00:45:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T11:50:00"
                                },
                                "carrierCode": "SQ",
                                "number": "231",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H5M",
                                "id": "65",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "37",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "38",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "64",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "65",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "76",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT23H25M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T19:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-02T00:20:00"
                                },
                                "carrierCode": "SQ",
                                "number": "242",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "12",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-02T13:05:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T14:35:00"
                                },
                                "carrierCode": "SQ",
                                "number": "710",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "13",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT16H45M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T21:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-21T00:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "719",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "66",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-21T07:05:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T17:55:00"
                                },
                                "carrierCode": "SQ",
                                "number": "241",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT7H50M",
                                "id": "67",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "12",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "13",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "66",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "67",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "77",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT25H50M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T19:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-02T00:20:00"
                                },
                                "carrierCode": "SQ",
                                "number": "242",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "37",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-02T15:25:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T17:00:00"
                                },
                                "carrierCode": "SQ",
                                "number": "712",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H35M",
                                "id": "38",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT15H25M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T12:15:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T15:45:00"
                                },
                                "carrierCode": "SQ",
                                "number": "707",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "52",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-20T20:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T07:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "221",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H",
                                "id": "53",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "37",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "38",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "52",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "53",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "78",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT23H25M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T19:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-02T00:20:00"
                                },
                                "carrierCode": "SQ",
                                "number": "242",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "12",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-02T13:05:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T14:35:00"
                                },
                                "carrierCode": "SQ",
                                "number": "710",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "13",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT17H55M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T09:45:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T13:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "705",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "73",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-20T20:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T07:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "221",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H",
                                "id": "74",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "12",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "13",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "73",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "74",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "79",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT25H50M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T19:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-02T00:20:00"
                                },
                                "carrierCode": "SQ",
                                "number": "242",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "37",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-02T15:25:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T17:00:00"
                                },
                                "carrierCode": "SQ",
                                "number": "712",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H35M",
                                "id": "38",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT16H10M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T15:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T19:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "709",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H35M",
                                "id": "45",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-21T00:45:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T11:50:00"
                                },
                                "carrierCode": "SQ",
                                "number": "231",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H5M",
                                "id": "46",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "37",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "38",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "45",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "80",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT25H50M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T19:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-02T00:20:00"
                                },
                                "carrierCode": "SQ",
                                "number": "242",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "37",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-02T15:25:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T17:00:00"
                                },
                                "carrierCode": "SQ",
                                "number": "712",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H35M",
                                "id": "38",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT16H45M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T21:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-21T00:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "719",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "66",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-21T07:05:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T17:55:00"
                                },
                                "carrierCode": "SQ",
                                "number": "241",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT7H50M",
                                "id": "67",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "37",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "38",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "66",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "67",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "81",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT25H50M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T19:10:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-02T00:20:00"
                                },
                                "carrierCode": "SQ",
                                "number": "242",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H10M",
                                "id": "37",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-02T15:25:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T17:00:00"
                                },
                                "carrierCode": "SQ",
                                "number": "712",
                                "aircraft": {
                                    "code": "359"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H35M",
                                "id": "38",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT17H55M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T09:45:00"
                                },
                                "arrival": {
                                    "iataCode": "SIN",
                                    "terminal": "0",
                                    "at": "2022-11-20T13:15:00"
                                },
                                "carrierCode": "SQ",
                                "number": "705",
                                "aircraft": {
                                    "code": "787"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT2H30M",
                                "id": "73",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SIN",
                                    "terminal": "3",
                                    "at": "2022-11-20T20:40:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-21T07:40:00"
                                },
                                "carrierCode": "SQ",
                                "number": "221",
                                "aircraft": {
                                    "code": "388"
                                },
                                "operating": {
                                    "carrierCode": "SQ"
                                },
                                "duration": "PT8H",
                                "id": "74",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "4716.41",
                    "base": "4586.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "4716.41"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "SQ"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "4716.41",
                            "base": "4586.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "37",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "38",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "73",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            },
                            {
                                "segmentId": "74",
                                "cabin": "ECONOMY",
                                "fareBasis": "YIFSQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "weight": 30,
                                    "weightUnit": "KG"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "82",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-11-01",
                "numberOfBookableSeats": 6,
                "itineraries": [
                    {
                        "duration": "PT28H20M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-01T12:00:00"
                                },
                                "arrival": {
                                    "iataCode": "PVG",
                                    "terminal": "2",
                                    "at": "2022-11-01T19:30:00"
                                },
                                "carrierCode": "MU",
                                "number": "562",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "MU"
                                },
                                "duration": "PT10H30M",
                                "id": "9",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "PVG",
                                    "terminal": "1",
                                    "at": "2022-11-02T08:45:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-02T12:20:00"
                                },
                                "carrierCode": "MU",
                                "number": "541",
                                "aircraft": {
                                    "code": "320"
                                },
                                "operating": {
                                    "carrierCode": "MU"
                                },
                                "duration": "PT4H35M",
                                "id": "10",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT38H25M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2022-11-20T13:35:00"
                                },
                                "arrival": {
                                    "iataCode": "PVG",
                                    "terminal": "2",
                                    "at": "2022-11-20T18:50:00"
                                },
                                "carrierCode": "MU",
                                "number": "542",
                                "aircraft": {
                                    "code": "320"
                                },
                                "operating": {
                                    "carrierCode": "MU"
                                },
                                "duration": "PT4H15M",
                                "id": "58",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "PVG",
                                    "terminal": "1",
                                    "at": "2022-11-21T18:30:00"
                                },
                                "arrival": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2022-11-22T08:00:00"
                                },
                                "carrierCode": "MU",
                                "number": "561",
                                "aircraft": {
                                    "code": "77W"
                                },
                                "operating": {
                                    "carrierCode": "MU"
                                },
                                "duration": "PT10H30M",
                                "id": "59",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "7340.89",
                    "base": "7009.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "7340.89"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "MU"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "7340.89",
                            "base": "7009.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "9",
                                "cabin": "ECONOMY",
                                "fareBasis": "YSE00DNQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "quantity": 2
                                }
                            },
                            {
                                "segmentId": "10",
                                "cabin": "BUSINESS",
                                "fareBasis": "QSE00CNL",
                                "class": "Q",
                                "includedCheckedBags": {
                                    "quantity": 2
                                }
                            },
                            {
                                "segmentId": "58",
                                "cabin": "ECONOMY",
                                "fareBasis": "YSE00CNL",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "quantity": 2
                                }
                            },
                            {
                                "segmentId": "59",
                                "cabin": "ECONOMY",
                                "fareBasis": "YSE00DNQ",
                                "class": "Y",
                                "includedCheckedBags": {
                                    "quantity": 2
                                }
                            }
                        ]
                    }
                ]
            }
        ],
        "dictionaries": {
            "locations": {
                "PVG": {
                    "cityCode": "SHA",
                    "countryCode": "CN"
                },
                "HKT": {
                    "cityCode": "HKT",
                    "countryCode": "TH"
                },
                "BKK": {
                    "cityCode": "BKK",
                    "countryCode": "TH"
                },
                "TPE": {
                    "cityCode": "TPE",
                    "countryCode": "TW"
                },
                "SIN": {
                    "cityCode": "SIN",
                    "countryCode": "SG"
                },
                "MNL": {
                    "cityCode": "MNL",
                    "countryCode": "PH"
                },
                "DOH": {
                    "cityCode": "DOH",
                    "countryCode": "QA"
                },
                "SYD": {
                    "cityCode": "SYD",
                    "countryCode": "AU"
                },
                "HND": {
                    "cityCode": "TYO",
                    "countryCode": "JP"
                }
            },
            "aircraft": {
                "320": "AIRBUS A320",
                "321": "AIRBUS A321",
                "333": "AIRBUS A330-300",
                "388": "AIRBUS A380-800",
                "787": "787  ALL SERIES PASSENGER",
                "77W": "BOEING 777-300ER",
                "359": "AIRBUS A350-900",
                "788": "BOEING 787-8",
                "789": "BOEING 787-9",
                "77L": "BOEING 777-200LR"
            },
            "currencies": {
                "EUR": "EURO"
            },
            "carriers": {
                "QR": "QATAR AIRWAYS",
                "PR": "PHILIPPINE AIRLINES",
                "TG": "THAI AIRWAYS INTERNATIONAL",
                "QF": "QANTAS AIRWAYS",
                "EK": "EMIRATES",
                "CI": "CHINA AIRLINES LTD.",
                "MU": "CHINA EASTERN AIRLINES",
                "NH": "ALL NIPPON AIRWAYS",
                "WE": "THAI SMILE AIRWAYS",
                "SQ": "SINGAPORE AIRLINES"
            }
        }
    }
]
