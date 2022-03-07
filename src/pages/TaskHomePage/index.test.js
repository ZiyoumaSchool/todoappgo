import TaskHomePage from'./'
import { render } from '@testing-library/react'

describe('TaskHomePage', () => {
    test('TaskHomePage Should render without crash', async () => {
        render(<TaskHomePage />)
    })
})