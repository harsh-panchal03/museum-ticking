"use client"

import { useState, type ChangeEvent, type FocusEvent } from "react"

type ValidationRules = {
  required?: boolean
  minLength?: number
  maxLength?: number
  email?: boolean
  pattern?: RegExp
  custom?: (value: string) => boolean | string
}

type ValidationErrors<T> = {
  [K in keyof T]?: string
}

type TouchedFields<T> = {
  [K in keyof T]?: boolean
}

export function useFormValidation<T extends Record<string, string>>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<ValidationErrors<T>>({})
  const [touched, setTouched] = useState<TouchedFields<T>>({})

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target
    setTouched({
      ...touched,
      [name]: true,
    })
  }

  const validateField = (name: keyof T, value: string, rules: ValidationRules): string | undefined => {
    if (rules.required && !value) {
      return "This field is required"
    }

    if (rules.minLength && value.length < rules.minLength) {
      return `Must be at least ${rules.minLength} characters`
    }

    if (rules.maxLength && value.length > rules.maxLength) {
      return `Must be less than ${rules.maxLength} characters`
    }

    if (rules.email && !/\S+@\S+\.\S+/.test(value)) {
      return "Please enter a valid email address"
    }

    if (rules.pattern && !rules.pattern.test(value)) {
      return "Please enter a valid format"
    }

    if (rules.custom) {
      const customResult = rules.custom(value)
      if (typeof customResult === "string") {
        return customResult
      }
      if (customResult === false) {
        return "Invalid value"
      }
    }

    return undefined
  }

  const validate = (validationRules: Record<keyof T, ValidationRules>): boolean => {
    const newErrors: ValidationErrors<T> = {}
    const newTouched: TouchedFields<T> = {}

    let isValid = true

    // Validate each field
    Object.keys(validationRules).forEach((key) => {
      const fieldName = key as keyof T
      const fieldValue = values[fieldName]
      const fieldRules = validationRules[fieldName]

      newTouched[fieldName] = true

      const error = validateField(fieldName, fieldValue, fieldRules)
      if (error) {
        newErrors[fieldName] = error
        isValid = false
      }
    })

    setErrors(newErrors)
    setTouched(newTouched)

    return isValid
  }

  const resetForm = () => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
  }

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validate,
    resetForm,
  }
}
