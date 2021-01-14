/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/pet': {
    put: operations['updatePet']
    post: operations['addPet']
  }
  '/pet/findByStatus': {
    get: operations['findPetsByStatus']
  }
  '/pet/findByTags': {
    get: operations['findPetsByTags']
  }
  '/pet/{petId}': {
    get: operations['getPetById']
    post: operations['updatePetWithForm']
    delete: operations['deletePet']
  }
  '/pet/{petId}/uploadImage': {
    post: operations['uploadFile']
  }
  '/store/inventory': {
    get: operations['getInventory']
  }
  '/store/order': {
    post: operations['placeOrder']
  }
  '/store/order/{orderId}': {
    get: operations['getOrderById']
    delete: operations['deleteOrder']
  }
  '/user': {
    post: operations['createUser']
  }
  '/user/createWithArray': {
    post: operations['createUsersWithArrayInput']
  }
  '/user/createWithList': {
    post: operations['createUsersWithListInput']
  }
  '/user/login': {
    get: operations['loginUser']
  }
  '/user/logout': {
    get: operations['logoutUser']
  }
  '/user/{username}': {
    get: operations['getUserByName']
    put: operations['updateUser']
    delete: operations['deleteUser']
  }
}

export interface operations {
  updatePet: {
    requestBody: {
      'application/json': components['schemas']['Pet']
      'application/xml': components['schemas']['Pet']
    }
    responses: {
      /** Invalid ID supplied */
      400: unknown
      /** Pet not found */
      404: unknown
      /** Validation exception */
      405: unknown
    }
  }
  addPet: {
    requestBody: {
      'application/json': components['schemas']['Pet']
      'application/xml': components['schemas']['Pet']
    }
    responses: {
      /** Invalid input */
      405: unknown
    }
  }
  /** Multiple status values can be provided with comma separated strings */
  findPetsByStatus: {
    parameters: {
      query: {
        /** Status values that need to be considered for filter */
        status: ('available' | 'pending' | 'sold')[]
      }
    }
    responses: {
      /** successful operation */
      200: {
        'application/xml': components['schemas']['Pet'][]
        'application/json': components['schemas']['Pet'][]
      }
      /** Invalid status value */
      400: unknown
    }
  }
  /** Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing. */
  findPetsByTags: {
    parameters: {
      query: {
        /** Tags to filter by */
        tags: string[]
      }
    }
    responses: {
      /** successful operation */
      200: {
        'application/xml': components['schemas']['Pet'][]
        'application/json': components['schemas']['Pet'][]
      }
      /** Invalid tag value */
      400: unknown
    }
  }
  /** Returns a single pet */
  getPetById: {
    parameters: {
      path: {
        /** ID of pet to return */
        petId: number
      }
    }
    responses: {
      /** successful operation */
      200: {
        'application/xml': components['schemas']['Pet']
        'application/json': components['schemas']['Pet']
      }
      /** Invalid ID supplied */
      400: unknown
      /** Pet not found */
      404: unknown
    }
  }
  updatePetWithForm: {
    parameters: {
      path: {
        /** ID of pet that needs to be updated */
        petId: number
      }
    }
    requestBody: {
      'application/x-www-form-urlencoded': {
        /** Updated name of the pet */
        name?: string
        /** Updated status of the pet */
        status?: string
      }
    }
    responses: {
      /** Invalid input */
      405: unknown
    }
  }
  deletePet: {
    parameters: {
      header: {
        api_key?: string
      }
      path: {
        /** Pet id to delete */
        petId: number
      }
    }
    responses: {
      /** Invalid ID supplied */
      400: unknown
      /** Pet not found */
      404: unknown
    }
  }
  uploadFile: {
    parameters: {
      path: {
        /** ID of pet to update */
        petId: number
      }
    }
    requestBody: {
      'multipart/form-data': {
        /** Additional data to pass to server */
        additionalMetadata?: string
        /** file to upload */
        file?: string
      }
    }
    responses: {
      /** successful operation */
      200: {
        'application/json': components['schemas']['ApiResponse']
      }
    }
  }
  /** Returns a map of status codes to quantities */
  getInventory: {
    responses: {
      /** successful operation */
      200: {
        'application/json': { [key: string]: number }
      }
    }
  }
  placeOrder: {
    requestBody: {
      '*/*': components['schemas']['Order']
    }
    responses: {
      /** successful operation */
      200: {
        'application/xml': components['schemas']['Order']
        'application/json': components['schemas']['Order']
      }
      /** Invalid Order */
      400: unknown
    }
  }
  /** For valid response try integer IDs with value >= 1 and <= 10.         Other values will generated exceptions */
  getOrderById: {
    parameters: {
      path: {
        /** ID of pet that needs to be fetched */
        orderId: number
      }
    }
    responses: {
      /** successful operation */
      200: {
        'application/xml': components['schemas']['Order']
        'application/json': components['schemas']['Order']
      }
      /** Invalid ID supplied */
      400: unknown
      /** Order not found */
      404: unknown
    }
  }
  /** For valid response try integer IDs with positive integer value.         Negative or non-integer values will generate API errors */
  deleteOrder: {
    parameters: {
      path: {
        /** ID of the order that needs to be deleted */
        orderId: number
      }
    }
    responses: {
      /** Invalid ID supplied */
      400: unknown
      /** Order not found */
      404: unknown
    }
  }
  /** This can only be done by the logged in user. */
  createUser: {
    requestBody: {
      '*/*': components['schemas']['User']
    }
    responses: {
      /** successful operation */
      default: unknown
    }
  }
  createUsersWithArrayInput: {
    requestBody: {
      '*/*': components['schemas']['User'][]
    }
    responses: {
      /** successful operation */
      default: unknown
    }
  }
  createUsersWithListInput: {
    requestBody: {
      '*/*': components['schemas']['User'][]
    }
    responses: {
      /** successful operation */
      default: unknown
    }
  }
  loginUser: {
    parameters: {
      query: {
        /** The user name for login */
        username: string
        /** The password for login in clear text */
        password: string
      }
    }
    responses: {
      /** successful operation */
      200: {
        'application/xml': string
        'application/json': string
      }
      /** Invalid username/password supplied */
      400: unknown
    }
  }
  logoutUser: {
    responses: {
      /** successful operation */
      default: unknown
    }
  }
  getUserByName: {
    parameters: {
      path: {
        /** The name that needs to be fetched. Use user1 for testing. */
        username: string
      }
    }
    responses: {
      /** successful operation */
      200: {
        'application/xml': components['schemas']['User']
        'application/json': components['schemas']['User']
      }
      /** Invalid username supplied */
      400: unknown
      /** User not found */
      404: unknown
    }
  }
  /** This can only be done by the logged in user. */
  updateUser: {
    parameters: {
      path: {
        /** name that need to be updated */
        username: string
      }
    }
    requestBody: {
      '*/*': components['schemas']['User']
    }
    responses: {
      /** Invalid user supplied */
      400: unknown
      /** User not found */
      404: unknown
    }
  }
  /** This can only be done by the logged in user. */
  deleteUser: {
    parameters: {
      path: {
        /** The name that needs to be deleted */
        username: string
      }
    }
    responses: {
      /** Invalid username supplied */
      400: unknown
      /** User not found */
      404: unknown
    }
  }
}

export interface components {
  schemas: {
    Order: {
      id?: number
      petId?: number
      quantity?: number
      shipDate?: string
      /** Order Status */
      status?: 'placed' | 'approved' | 'delivered'
      complete?: boolean
    }
    Category: {
      id?: number
      name?: string
    }
    User: {
      id?: number
      username?: string
      firstName?: string
      lastName?: string
      email?: string
      password?: string
      phone?: string
      /** User Status */
      userStatus?: number
    }
    Tag: {
      id?: number
      name?: string
    }
    Pet: {
      id?: number
      category?: components['schemas']['Category']
      name: string
      photoUrls: string[]
      tags?: components['schemas']['Tag'][]
      /** pet status in the store */
      status?: 'available' | 'pending' | 'sold'
    }
    ApiResponse: {
      code?: number
      type?: string
      message?: string
    }
  }
}
