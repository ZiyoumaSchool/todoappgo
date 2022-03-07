import SectionFilterTask from'./'
import { render } from '@testing-library/react'

describe('SectionFilterTask', () => {
    test( 'SectionFilterTask Should render without crash', async () => {
        render(<SectionFilterTask />)
    })
})