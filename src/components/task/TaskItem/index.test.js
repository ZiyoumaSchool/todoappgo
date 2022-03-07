import TaskItem from'./'
import { render } from '@testing-library/react'

describe('TaskItem', () => {
    test('TaskItem Should render without crash', async () => {
        render(<TaskItem />)
    })
})