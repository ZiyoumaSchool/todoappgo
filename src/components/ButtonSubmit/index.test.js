import ButtonSubmit from'./'
import { render } from '@testing-library/react'

describe('ButtonSubmit', () => {
    test('Should render without crash', async () => {
        render(<ButtonSubmit />)
    })
})