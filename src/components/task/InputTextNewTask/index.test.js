import InputTextNewTask from'./'
import { render } from '@testing-library/react'

describe('InputTextNewTask', () => {
    test('InputTextNewTask Should render without crash', async () => {
        render(< InputTextNewTask/>)
    })
})