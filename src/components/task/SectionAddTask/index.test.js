import SectionAddTask from'./'
import { render } from '@testing-library/react'

describe('SectionAddTask', () => {
    test( 'SectionAddTask Should render without crash', async () => {
        render(<SectionAddTask />)
    })
})