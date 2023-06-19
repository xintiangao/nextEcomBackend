export function validatePhoto(input) {
    const validationErrors = {}
  
    if (!('price' in input) || input['price'].length == 0) {
      validationErrors['email'] = 'cannot be blank'
    }
  
    if (!('title' in input) || input['title'].length == 0) {
      validationErrors['title'] = 'cannot be blank'
    }
  
    if (!('description' in input) || input['description'].length == 0) {
        validationErrors['description'] = 'cannot be blank'
      }
  
    return validationErrors
  }
  