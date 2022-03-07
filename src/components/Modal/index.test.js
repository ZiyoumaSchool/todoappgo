import ModalComponent from'./'
import { render } from '@testing-library/react'

describe('ModalComponent', () => {
    test('ModalComponent Should render without crash', async () => {
        render(<ModalComponent />)
    })
})