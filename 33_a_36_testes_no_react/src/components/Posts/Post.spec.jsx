import { Posts } from '../Posts'
const { render } = require('@testing-library/react')

const props = {
    posts: [
        {
            id: 1,
            title: 'title 1',
            body: 'body 1',
            url: 'images/img1.png' 
         },
         {
            id: 2,
            title: 'title 2',
            body: 'body 2',
            url: 'images/img2.png' 
         },
         {
            id: 3,
            title: 'title 3',
            body: 'body 3',
            url: 'images/img3.png' 
         }
    ]
}

describe('<Post />', () => {
    it('should render the posts', () => {
        render(<Posts {...props}/>);
    })
})