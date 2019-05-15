export default {
  cacheId: '3335fe72057045398dd28bd2fa203b21',
  orderFormId: '3335fe72057045398dd28bd2fa203b21',
  value: 22.400000000000002,
  totalizers: [
    {
      id: 'Items',
      name: 'Items Total',
      value: 2240,
      __typename: 'vtex_storegraphql_2_51_0_Totalizer',
    },
    {
      id: 'Shipping',
      name: 'Shipping Total',
      value: 0,
      __typename: 'vtex_storegraphql_2_51_0_Totalizer',
    },
  ],
  items: [
    {
      id: '17',
      name: 'Pepperoni Small',
      imageUrl:
        'http://delivery.vteximg.com.br/arquivos/ids/155439-55-55/pepperoni-feast.0e1c4c9e7b8900d08cc51ff285fd9ae3.1.jpg?v=636770441237070000',
      detailUrl: '/pizza-pepperoni/p',
      skuName: 'Small',
      quantity: 1,
      sellingPrice: 14.9,
      listPrice: 14.9,
      parentItemIndex: null,
      parentAssemblyBinding: null,
      cartIndex: 0,
      assemblyOptions: {
        added: [
          {
            item: {
              name: 'Classic Crust',
              sellingPrice: 0,
              quantity: 1,
              __typename: 'vtex_storegraphql_2_51_0_OrderFormItem',
            },
            normalizedQuantity: 1,
            choiceType: 'SINGLE',
            extraQuantity: 0,
            __typename: 'vtex_storegraphql_2_51_0_AddedOptionItem',
          },
          {
            item: {
              name: 'Pepperoni',
              sellingPrice: 0,
              quantity: 1,
              __typename: 'vtex_storegraphql_2_51_0_OrderFormItem',
            },
            normalizedQuantity: 1,
            choiceType: 'TOGGLE',
            extraQuantity: 0,
            __typename: 'vtex_storegraphql_2_51_0_AddedOptionItem',
          },
          {
            item: {
              name: 'Ham',
              sellingPrice: 1.5,
              quantity: 3,
              __typename: 'vtex_storegraphql_2_51_0_OrderFormItem',
            },
            normalizedQuantity: 3,
            choiceType: 'MULTIPLE',
            extraQuantity: 3,
            __typename: 'vtex_storegraphql_2_51_0_AddedOptionItem',
          },
          {
            item: {
              name: 'Pineapple',
              sellingPrice: 1,
              quantity: 3,
              __typename: 'vtex_storegraphql_2_51_0_OrderFormItem',
            },
            normalizedQuantity: 3,
            choiceType: 'MULTIPLE',
            extraQuantity: 3,
            __typename: 'vtex_storegraphql_2_51_0_AddedOptionItem',
          },
        ],
        removed: [
          {
            removedQuantity: 1,
            initialQuantity: 1,
            name: 'Onion',
            __typename: 'vtex_storegraphql_2_51_0_RemovedOptionItem',
          },
        ],
        parentPrice: 14.9,
        __typename: 'vtex_storegraphql_2_51_0_AssemblyOptionItem',
      },
      __typename: 'vtex_storegraphql_2_51_0_OrderFormItem',
    },
    {
      id: '14',
      name: 'Classic Crust',
      imageUrl:
        'http://delivery.vteximg.com.br/arquivos/ids/155413-55-55/classic.png?v=636759866429100000',
      detailUrl: '/classic-crust/p',
      skuName: 'Classic Crust',
      quantity: 1,
      sellingPrice: 0,
      listPrice: 0,
      parentItemIndex: 0,
      parentAssemblyBinding: 'Pepperoni - Small_Crust',
      cartIndex: 1,
      assemblyOptions: {
        added: [],
        removed: [],
        parentPrice: 0,
        __typename: 'vtex_storegraphql_2_51_0_AssemblyOptionItem',
      },
      __typename: 'vtex_storegraphql_2_51_0_OrderFormItem',
    },
    {
      id: '9',
      name: 'Pepperoni',
      imageUrl:
        'http://delivery.vteximg.com.br/arquivos/ids/155428-55-55/Topping_Pepperoni.jpg.png?v=636766047561270000',
      detailUrl: '/pepperoni/p',
      skuName: 'Pepperoni',
      quantity: 1,
      sellingPrice: 0,
      listPrice: 0,
      parentItemIndex: 0,
      cartIndex: 2,
      parentAssemblyBinding: 'Pepperoni - Small_Basic Toppings',
      assemblyOptions: {
        added: [],
        removed: [],
        parentPrice: 0,
        __typename: 'vtex_storegraphql_2_51_0_AssemblyOptionItem',
      },
      __typename: 'vtex_storegraphql_2_51_0_OrderFormItem',
    },
    {
      id: '8',
      name: 'Ham',
      imageUrl:
        'http://delivery.vteximg.com.br/arquivos/ids/155432-55-55/Topping_Jamon.jpg.png?v=636766052579200000',
      detailUrl: '/ham/p',
      skuName: 'Ham',
      quantity: 3,
      sellingPrice: 1.5,
      listPrice: 1.5,
      parentItemIndex: 0,
      cartIndex: 3,
      parentAssemblyBinding: 'Pepperoni - Small_Toppings',
      assemblyOptions: {
        added: [],
        removed: [],
        parentPrice: 1.5,
        __typename: 'vtex_storegraphql_2_51_0_AssemblyOptionItem',
      },
      __typename: 'vtex_storegraphql_2_51_0_OrderFormItem',
    },
    {
      id: '38',
      name: 'Pineapple',
      imageUrl:
        'http://delivery.vteximg.com.br/arquivos/ids/155435-55-55/Topping_Pina.jpg.png?v=636766056177370000',
      detailUrl: '/pineapple/p',
      skuName: 'Pineapple',
      quantity: 3,
      sellingPrice: 1,
      listPrice: 1,
      parentItemIndex: 0,
      cartIndex: 4,
      parentAssemblyBinding: 'Pepperoni - Small_Toppings',
      assemblyOptions: {
        added: [],
        removed: [],
        parentPrice: 1,
        __typename: 'vtex_storegraphql_2_51_0_AssemblyOptionItem',
      },
      __typename: 'vtex_storegraphql_2_51_0_OrderFormItem',
    },
  ],
  shippingData: {
    address: {
      id: null,
      neighborhood: 'Botafogo',
      complement: '',
      number: '300',
      street: 'Praia de Botafogo',
      postalCode: '22250-040',
      city: 'Rio de Janeiro',
      reference: null,
      addressName: null,
      addressType: 'residential',
      __typename: 'vtex_storegraphql_2_51_0_Address',
    },
    availableAddresses: [
      {
        id: null,
        neighborhood: 'Botafogo',
        complement: '',
        number: '300',
        street: 'Praia de Botafogo',
        postalCode: '22250-040',
        city: 'Rio de Janeiro',
        reference: null,
        addressName: null,
        addressType: 'residential',
        __typename: 'vtex_storegraphql_2_51_0_Address',
      },
    ],
    __typename: 'vtex_storegraphql_2_51_0_OrderFormShippingData',
  },
  clientProfileData: null,
  storePreferencesData: {
    countryCode: 'BRA',
    currencyCode: 'BRL',
    timeZone: 'E. South America Standard Time',
    __typename: 'vtex_storegraphql_2_51_0_StorePreferencesData',
  },
  itemMetadata: {
    items: [
      {
        id: '17',
        name: 'Pepperoni Small',
        skuName: 'Small',
        productId: '13',
        refId: '1111',
        ean: null,
        imageUrl:
          'http://delivery.vteximg.com.br/arquivos/ids/155439-55-55/pepperoni-feast.0e1c4c9e7b8900d08cc51ff285fd9ae3.1.jpg?v=636770441237070000',
        detailUrl: '/pizza-pepperoni/p',
        assemblyOptions: [
          {
            id: 'Pepperoni - Small_Crust',
            name: 'Pepperoni - Small',
            required: true,
            composition: {
              minQuantity: 1,
              maxQuantity: 1,
              items: [
                {
                  maxQuantity: 1,
                  initialQuantity: 1,
                  id: '14',
                  __typename: 'vtex_storegraphql_2_51_0_CompositionItem',
                },
              ],
              __typename: 'vtex_storegraphql_2_51_0_CompositionType',
            },
            __typename: 'vtex_storegraphql_2_51_0_AssemblyOption',
          },
          {
            id: 'Pepperoni - Small_Toppings',
            name: 'Pepperoni - Small',
            required: true,
            composition: {
              minQuantity: 0,
              maxQuantity: 10,
              items: [
                {
                  maxQuantity: 3,
                  initialQuantity: 0,
                  id: '8',
                  __typename: 'vtex_storegraphql_2_51_0_CompositionItem',
                },
                {
                  maxQuantity: 3,
                  initialQuantity: 0,
                  id: '9',
                  __typename: 'vtex_storegraphql_2_51_0_CompositionItem',
                },
                {
                  maxQuantity: 3,
                  initialQuantity: 0,
                  id: '10',
                  __typename: 'vtex_storegraphql_2_51_0_CompositionItem',
                },
                {
                  maxQuantity: 3,
                  initialQuantity: 0,
                  id: '11',
                  __typename: 'vtex_storegraphql_2_51_0_CompositionItem',
                },
                {
                  maxQuantity: 3,
                  initialQuantity: 0,
                  id: '36',
                  __typename: 'vtex_storegraphql_2_51_0_CompositionItem',
                },
                {
                  maxQuantity: 3,
                  initialQuantity: 0,
                  id: '37',
                  __typename: 'vtex_storegraphql_2_51_0_CompositionItem',
                },
                {
                  maxQuantity: 3,
                  initialQuantity: 0,
                  id: '38',
                  __typename: 'vtex_storegraphql_2_51_0_CompositionItem',
                },
              ],
              __typename: 'vtex_storegraphql_2_51_0_CompositionType',
            },
            __typename: 'vtex_storegraphql_2_51_0_AssemblyOption',
          },
          {
            id: 'Pepperoni - Small_Basic Toppings',
            name: 'Pepperoni - Small',
            required: true,
            composition: {
              minQuantity: 1,
              maxQuantity: 2,
              items: [
                {
                  maxQuantity: 1,
                  initialQuantity: 1,
                  id: '9',
                  __typename: 'vtex_storegraphql_2_51_0_CompositionItem',
                },
                {
                  maxQuantity: 1,
                  initialQuantity: 1,
                  id: '11',
                  __typename: 'vtex_storegraphql_2_51_0_CompositionItem',
                },
              ],
              __typename: 'vtex_storegraphql_2_51_0_CompositionType',
            },
            __typename: 'vtex_storegraphql_2_51_0_AssemblyOption',
          },
        ],
        __typename: 'vtex_storegraphql_2_51_0_ItemMetadataUnit',
      },
      {
        id: '14',
        name: 'Classic Crust',
        skuName: 'Classic Crust',
        productId: '12',
        refId: '14',
        ean: null,
        imageUrl:
          'http://delivery.vteximg.com.br/arquivos/ids/155413-55-55/classic.png?v=636759866429100000',
        detailUrl: '/classic-crust/p',
        assemblyOptions: [],
        __typename: 'vtex_storegraphql_2_51_0_ItemMetadataUnit',
      },
      {
        id: '8',
        name: 'Ham',
        skuName: 'Ham',
        productId: '6',
        refId: '2',
        ean: null,
        imageUrl:
          'http://delivery.vteximg.com.br/arquivos/ids/155432-55-55/Topping_Jamon.jpg.png?v=636766052579200000',
        detailUrl: '/ham/p',
        assemblyOptions: [],
        __typename: 'vtex_storegraphql_2_51_0_ItemMetadataUnit',
      },
      {
        id: '9',
        name: 'Pepperoni',
        skuName: 'Pepperoni',
        productId: '7',
        refId: '3',
        ean: null,
        imageUrl:
          'http://delivery.vteximg.com.br/arquivos/ids/155428-55-55/Topping_Pepperoni.jpg.png?v=636766047561270000',
        detailUrl: '/pepperoni/p',
        assemblyOptions: [],
        __typename: 'vtex_storegraphql_2_51_0_ItemMetadataUnit',
      },
      {
        id: '10',
        name: 'Champignon',
        skuName: 'Champignon',
        productId: '8',
        refId: '4',
        ean: null,
        imageUrl:
          'http://delivery.vteximg.com.br/arquivos/ids/155436-55-55/Topping_Champinones.png?v=636766057405600000',
        detailUrl: '/champignon/p',
        assemblyOptions: [],
        __typename: 'vtex_storegraphql_2_51_0_ItemMetadataUnit',
      },
      {
        id: '11',
        name: 'Onion',
        skuName: 'Onion',
        productId: '9',
        refId: '5',
        ean: null,
        imageUrl:
          'http://delivery.vteximg.com.br/arquivos/ids/155427-55-55/Topping_Cebolla.jpg.png?v=636766046799500000',
        detailUrl: '/onion/p',
        assemblyOptions: [],
        __typename: 'vtex_storegraphql_2_51_0_ItemMetadataUnit',
      },
      {
        id: '36',
        name: 'Black Olives',
        skuName: 'Black Olives',
        productId: '23',
        refId: '151113',
        ean: null,
        imageUrl:
          'http://delivery.vteximg.com.br/arquivos/ids/155430-55-55/Topping_Aceitunas-Negras.jpg.png?v=636766049376970000',
        detailUrl: '/black-olives/p',
        assemblyOptions: [],
        __typename: 'vtex_storegraphql_2_51_0_ItemMetadataUnit',
      },
      {
        id: '37',
        name: 'Green Pepper',
        skuName: 'Green Pepper',
        productId: '24',
        refId: '123123',
        ean: null,
        imageUrl:
          'http://delivery.vteximg.com.br/arquivos/ids/155431-55-55/PIMIENTO-VERDE.png?v=636766050771230000',
        detailUrl: '/green-pepper/p',
        assemblyOptions: [],
        __typename: 'vtex_storegraphql_2_51_0_ItemMetadataUnit',
      },
      {
        id: '38',
        name: 'Pineapple',
        skuName: 'Pineapple',
        productId: '25',
        refId: '121211',
        ean: null,
        imageUrl:
          'http://delivery.vteximg.com.br/arquivos/ids/155435-55-55/Topping_Pina.jpg.png?v=636766056177370000',
        detailUrl: '/pineapple/p',
        assemblyOptions: [],
        __typename: 'vtex_storegraphql_2_51_0_ItemMetadataUnit',
      },
    ],
    __typename: 'vtex_storegraphql_2_51_0_ItemMetadata',
  },
  __typename: 'vtex_storegraphql_2_51_0_OrderForm',
}

export const fullItems = {
  cacheId: '3335fe72057045398dd28bd2fa203b21',
  orderFormId: '3335fe72057045398dd28bd2fa203b21',
  value: 22.400000000000002,
  totalizers: [
    {
      id: 'Items',
      name: 'Items Total',
      value: 2240,
      __typename: 'vtex_storegraphql_2_51_0_Totalizer',
    },
    {
      id: 'Shipping',
      name: 'Shipping Total',
      value: 0,
      __typename: 'vtex_storegraphql_2_51_0_Totalizer',
    },
  ],
  items: [
    {
      id: '17',
      name: 'Pepperoni Small',
      imageUrl:
        'http://delivery.vteximg.com.br/arquivos/ids/155439-55-55/pepperoni-feast.0e1c4c9e7b8900d08cc51ff285fd9ae3.1.jpg?v=636770441237070000',
      detailUrl: '/pizza-pepperoni/p',
      skuName: 'Small',
      quantity: 1,
      sellingPrice: 14.9,
      listPrice: 14.9,
      parentItemIndex: null,
      parentAssemblyBinding: null,
      assemblyOptions: {
        added: [
          {
            item: {
              name: 'Classic Crust',
              sellingPrice: 0,
              quantity: 1,
              __typename: 'vtex_storegraphql_2_51_0_OrderFormItem',
            },
            normalizedQuantity: 1,
            choiceType: 'SINGLE',
            extraQuantity: 0,
            __typename: 'vtex_storegraphql_2_51_0_AddedOptionItem',
          },
          {
            item: {
              name: 'Pepperoni',
              sellingPrice: 0,
              quantity: 1,
              __typename: 'vtex_storegraphql_2_51_0_OrderFormItem',
            },
            normalizedQuantity: 1,
            choiceType: 'TOGGLE',
            extraQuantity: 0,
            __typename: 'vtex_storegraphql_2_51_0_AddedOptionItem',
          },
          {
            item: {
              name: 'Ham',
              sellingPrice: 1.5,
              quantity: 3,
              __typename: 'vtex_storegraphql_2_51_0_OrderFormItem',
            },
            normalizedQuantity: 3,
            choiceType: 'MULTIPLE',
            extraQuantity: 3,
            __typename: 'vtex_storegraphql_2_51_0_AddedOptionItem',
          },
          {
            item: {
              name: 'Pineapple',
              sellingPrice: 1,
              quantity: 3,
              __typename: 'vtex_storegraphql_2_51_0_OrderFormItem',
            },
            normalizedQuantity: 3,
            choiceType: 'MULTIPLE',
            extraQuantity: 3,
            __typename: 'vtex_storegraphql_2_51_0_AddedOptionItem',
          },
        ],
        removed: [
          {
            removedQuantity: 1,
            initialQuantity: 1,
            name: 'Onion',
            __typename: 'vtex_storegraphql_2_51_0_RemovedOptionItem',
          },
        ],
        parentPrice: 14.9,
        __typename: 'vtex_storegraphql_2_51_0_AssemblyOptionItem',
      },
      __typename: 'vtex_storegraphql_2_51_0_OrderFormItem',
    },
    {
      id: '14',
      name: 'Classic Crust',
      imageUrl:
        'http://delivery.vteximg.com.br/arquivos/ids/155413-55-55/classic.png?v=636759866429100000',
      detailUrl: '/classic-crust/p',
      skuName: 'Classic Crust',
      quantity: 1,
      sellingPrice: 0,
      listPrice: 0,
      parentItemIndex: null,
      parentAssemblyBinding: null,
      assemblyOptions: {
        added: [],
        removed: [],
        parentPrice: 0,
        __typename: 'vtex_storegraphql_2_51_0_AssemblyOptionItem',
      },
      __typename: 'vtex_storegraphql_2_51_0_OrderFormItem',
    },
    {
      id: '9',
      name: 'Pepperoni',
      imageUrl:
        'http://delivery.vteximg.com.br/arquivos/ids/155428-55-55/Topping_Pepperoni.jpg.png?v=636766047561270000',
      detailUrl: '/pepperoni/p',
      skuName: 'Pepperoni',
      quantity: 1,
      sellingPrice: 0,
      listPrice: 0,
      parentItemIndex: null,
      parentAssemblyBinding: null,
      assemblyOptions: {
        added: [],
        removed: [],
        parentPrice: 0,
        __typename: 'vtex_storegraphql_2_51_0_AssemblyOptionItem',
      },
      __typename: 'vtex_storegraphql_2_51_0_OrderFormItem',
    },
    {
      id: '8',
      name: 'Ham',
      imageUrl:
        'http://delivery.vteximg.com.br/arquivos/ids/155432-55-55/Topping_Jamon.jpg.png?v=636766052579200000',
      detailUrl: '/ham/p',
      skuName: 'Ham',
      quantity: 3,
      sellingPrice: 1.5,
      listPrice: 1.5,
      parentItemIndex: null,
      parentAssemblyBinding: null,
      assemblyOptions: {
        added: [],
        removed: [],
        parentPrice: 1.5,
        __typename: 'vtex_storegraphql_2_51_0_AssemblyOptionItem',
      },
      __typename: 'vtex_storegraphql_2_51_0_OrderFormItem',
    },
    {
      id: '38',
      name: 'Pineapple',
      imageUrl:
        'http://delivery.vteximg.com.br/arquivos/ids/155435-55-55/Topping_Pina.jpg.png?v=636766056177370000',
      detailUrl: '/pineapple/p',
      skuName: 'Pineapple',
      quantity: 3,
      sellingPrice: 1,
      listPrice: 1,
      parentItemIndex: null,
      parentAssemblyBinding: null,
      assemblyOptions: {
        added: [],
        removed: [],
        parentPrice: 1,
        __typename: 'vtex_storegraphql_2_51_0_AssemblyOptionItem',
      },
      __typename: 'vtex_storegraphql_2_51_0_OrderFormItem',
    },
  ],
  shippingData: {
    address: {
      id: null,
      neighborhood: 'Botafogo',
      complement: '',
      number: '300',
      street: 'Praia de Botafogo',
      postalCode: '22250-040',
      city: 'Rio de Janeiro',
      reference: null,
      addressName: null,
      addressType: 'residential',
      __typename: 'vtex_storegraphql_2_51_0_Address',
    },
    availableAddresses: [
      {
        id: null,
        neighborhood: 'Botafogo',
        complement: '',
        number: '300',
        street: 'Praia de Botafogo',
        postalCode: '22250-040',
        city: 'Rio de Janeiro',
        reference: null,
        addressName: null,
        addressType: 'residential',
        __typename: 'vtex_storegraphql_2_51_0_Address',
      },
    ],
    __typename: 'vtex_storegraphql_2_51_0_OrderFormShippingData',
  },
  clientProfileData: null,
  storePreferencesData: {
    countryCode: 'BRA',
    currencyCode: 'BRL',
    timeZone: 'E. South America Standard Time',
    __typename: 'vtex_storegraphql_2_51_0_StorePreferencesData',
  },
  itemMetadata: {
    items: [
      {
        id: '17',
        name: 'Pepperoni Small',
        skuName: 'Small',
        productId: '13',
        refId: '1111',
        ean: null,
        imageUrl:
          'http://delivery.vteximg.com.br/arquivos/ids/155439-55-55/pepperoni-feast.0e1c4c9e7b8900d08cc51ff285fd9ae3.1.jpg?v=636770441237070000',
        detailUrl: '/pizza-pepperoni/p',
        assemblyOptions: [
          {
            id: 'Pepperoni - Small_Crust',
            name: 'Pepperoni - Small',
            required: true,
            composition: {
              minQuantity: 1,
              maxQuantity: 1,
              items: [
                {
                  maxQuantity: 1,
                  initialQuantity: 1,
                  id: '14',
                  __typename: 'vtex_storegraphql_2_51_0_CompositionItem',
                },
              ],
              __typename: 'vtex_storegraphql_2_51_0_CompositionType',
            },
            __typename: 'vtex_storegraphql_2_51_0_AssemblyOption',
          },
          {
            id: 'Pepperoni - Small_Toppings',
            name: 'Pepperoni - Small',
            required: true,
            composition: {
              minQuantity: 0,
              maxQuantity: 10,
              items: [
                {
                  maxQuantity: 3,
                  initialQuantity: 0,
                  id: '8',
                  __typename: 'vtex_storegraphql_2_51_0_CompositionItem',
                },
                {
                  maxQuantity: 3,
                  initialQuantity: 0,
                  id: '9',
                  __typename: 'vtex_storegraphql_2_51_0_CompositionItem',
                },
                {
                  maxQuantity: 3,
                  initialQuantity: 0,
                  id: '10',
                  __typename: 'vtex_storegraphql_2_51_0_CompositionItem',
                },
                {
                  maxQuantity: 3,
                  initialQuantity: 0,
                  id: '11',
                  __typename: 'vtex_storegraphql_2_51_0_CompositionItem',
                },
                {
                  maxQuantity: 3,
                  initialQuantity: 0,
                  id: '36',
                  __typename: 'vtex_storegraphql_2_51_0_CompositionItem',
                },
                {
                  maxQuantity: 3,
                  initialQuantity: 0,
                  id: '37',
                  __typename: 'vtex_storegraphql_2_51_0_CompositionItem',
                },
                {
                  maxQuantity: 3,
                  initialQuantity: 0,
                  id: '38',
                  __typename: 'vtex_storegraphql_2_51_0_CompositionItem',
                },
              ],
              __typename: 'vtex_storegraphql_2_51_0_CompositionType',
            },
            __typename: 'vtex_storegraphql_2_51_0_AssemblyOption',
          },
          {
            id: 'Pepperoni - Small_Basic Toppings',
            name: 'Pepperoni - Small',
            required: true,
            composition: {
              minQuantity: 1,
              maxQuantity: 2,
              items: [
                {
                  maxQuantity: 1,
                  initialQuantity: 1,
                  id: '9',
                  __typename: 'vtex_storegraphql_2_51_0_CompositionItem',
                },
                {
                  maxQuantity: 1,
                  initialQuantity: 1,
                  id: '11',
                  __typename: 'vtex_storegraphql_2_51_0_CompositionItem',
                },
              ],
              __typename: 'vtex_storegraphql_2_51_0_CompositionType',
            },
            __typename: 'vtex_storegraphql_2_51_0_AssemblyOption',
          },
        ],
        __typename: 'vtex_storegraphql_2_51_0_ItemMetadataUnit',
      },
      {
        id: '14',
        name: 'Classic Crust',
        skuName: 'Classic Crust',
        productId: '12',
        refId: '14',
        ean: null,
        imageUrl:
          'http://delivery.vteximg.com.br/arquivos/ids/155413-55-55/classic.png?v=636759866429100000',
        detailUrl: '/classic-crust/p',
        assemblyOptions: [],
        __typename: 'vtex_storegraphql_2_51_0_ItemMetadataUnit',
      },
      {
        id: '8',
        name: 'Ham',
        skuName: 'Ham',
        productId: '6',
        refId: '2',
        ean: null,
        imageUrl:
          'http://delivery.vteximg.com.br/arquivos/ids/155432-55-55/Topping_Jamon.jpg.png?v=636766052579200000',
        detailUrl: '/ham/p',
        assemblyOptions: [],
        __typename: 'vtex_storegraphql_2_51_0_ItemMetadataUnit',
      },
      {
        id: '9',
        name: 'Pepperoni',
        skuName: 'Pepperoni',
        productId: '7',
        refId: '3',
        ean: null,
        imageUrl:
          'http://delivery.vteximg.com.br/arquivos/ids/155428-55-55/Topping_Pepperoni.jpg.png?v=636766047561270000',
        detailUrl: '/pepperoni/p',
        assemblyOptions: [],
        __typename: 'vtex_storegraphql_2_51_0_ItemMetadataUnit',
      },
      {
        id: '10',
        name: 'Champignon',
        skuName: 'Champignon',
        productId: '8',
        refId: '4',
        ean: null,
        imageUrl:
          'http://delivery.vteximg.com.br/arquivos/ids/155436-55-55/Topping_Champinones.png?v=636766057405600000',
        detailUrl: '/champignon/p',
        assemblyOptions: [],
        __typename: 'vtex_storegraphql_2_51_0_ItemMetadataUnit',
      },
      {
        id: '11',
        name: 'Onion',
        skuName: 'Onion',
        productId: '9',
        refId: '5',
        ean: null,
        imageUrl:
          'http://delivery.vteximg.com.br/arquivos/ids/155427-55-55/Topping_Cebolla.jpg.png?v=636766046799500000',
        detailUrl: '/onion/p',
        assemblyOptions: [],
        __typename: 'vtex_storegraphql_2_51_0_ItemMetadataUnit',
      },
      {
        id: '36',
        name: 'Black Olives',
        skuName: 'Black Olives',
        productId: '23',
        refId: '151113',
        ean: null,
        imageUrl:
          'http://delivery.vteximg.com.br/arquivos/ids/155430-55-55/Topping_Aceitunas-Negras.jpg.png?v=636766049376970000',
        detailUrl: '/black-olives/p',
        assemblyOptions: [],
        __typename: 'vtex_storegraphql_2_51_0_ItemMetadataUnit',
      },
      {
        id: '37',
        name: 'Green Pepper',
        skuName: 'Green Pepper',
        productId: '24',
        refId: '123123',
        ean: null,
        imageUrl:
          'http://delivery.vteximg.com.br/arquivos/ids/155431-55-55/PIMIENTO-VERDE.png?v=636766050771230000',
        detailUrl: '/green-pepper/p',
        assemblyOptions: [],
        __typename: 'vtex_storegraphql_2_51_0_ItemMetadataUnit',
      },
      {
        id: '38',
        name: 'Pineapple',
        skuName: 'Pineapple',
        productId: '25',
        refId: '121211',
        ean: null,
        imageUrl:
          'http://delivery.vteximg.com.br/arquivos/ids/155435-55-55/Topping_Pina.jpg.png?v=636766056177370000',
        detailUrl: '/pineapple/p',
        assemblyOptions: [],
        __typename: 'vtex_storegraphql_2_51_0_ItemMetadataUnit',
      },
    ],
    __typename: 'vtex_storegraphql_2_51_0_ItemMetadata',
  },
  __typename: 'vtex_storegraphql_2_51_0_OrderForm',
}
