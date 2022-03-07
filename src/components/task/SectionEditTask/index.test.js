import SectionEditTask from'./'
import { render } from '@testing-library/react'

describe('SectionEditTask', () => {
    test( 'SectionEditTask Should render without crash', async () => {
        render(<SectionEditTask />)
    })
})