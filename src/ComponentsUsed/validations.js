import React, { Component } from 'react'

export class validations extends Component {
  static checkEmail = (email) => {
    const exp = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    try {
      if (email.length === 0)
        return false
      return exp.test(email.toLowerCase().trim())
    } catch (error) {
      return false
    }
  }
  static valueValidation({ type, value}) {
    switch (type) {
     // case "text": return true

     // case "name": return this.checkName(value)

    //  case "phone": return this.checkNumber(value)

      case "email": return this.checkEmail(value)


    //  case "address": return true

     // case "alphanum": return true

    //  case "file": return true

   //   case "fromdate": return this.checkDateDiff(startDate, endDate)

    // case "todate": return this.checkDateDiff(startDate, endDate)

      default: return true
    }
  }
}

export default validations
