import AlertDialog from'./'
import { render } from '@testing-library/react'

describe('AlertDialog', () => {
    test('Should render without crash', async () => {
        render(<AlertDialog />)
    })
})