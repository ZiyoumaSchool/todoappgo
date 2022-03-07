import TaskList from'./'
import { render } from '@testing-library/react'

describe('TaskList', () => {
    test('TaskList Should render without crash', async () => {
        render(<TaskList />)
    })
})