import HeaderComponent from'./'
import { render } from '@testing-library/react'

describe('Header', () => {
    test('Should render without crash', async () => {
        render(<HeaderComponent />)
    })
})