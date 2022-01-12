import React from "react";
import { render, fireEvent } from '@testing-library/react'
import App from './App'

jest.mock('./Registration', () => ({ Registration: () => <div>Registration component</div>}))
jest.mock('./Profile', () => ({ Profile: () => <div>Profile component</div>}))
jest.mock('./Map', () => ({ Map: () => <div>Map component</div>}))
jest.mock('./Login', () => ({ Login: () => <div>Login component</div>}))