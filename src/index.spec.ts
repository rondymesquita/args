import args from './index'

describe('test', () => {
  it('parse integers', () => {
    const options = args('--alpha=1 -b=0'.split(' '))
    expect(options).toEqual({
      alpha: 1,
      b: 0,
    })
  })
  it('parse double', () => {
    const options = args('--alpha=1.0 -b=0.5'.split(' '))
    expect(options).toEqual({
      alpha: 1.0,
      b: 0.5,
    })
  })
  it('parse string', () => {
    const options = args('--alpha=alphavalue -b=bvalue'.split(' '))
    expect(options).toEqual({
      alpha: 'alphavalue',
      b: 'bvalue',
    })
  })
  it('parse boolean', () => {
    const options = args('--alpha -b'.split(' '))
    expect(options).toEqual({
      alpha: true,
      b: true,
    })
  })
  it('parse boolean values', () => {
    const options = args('--alpha=true -b=false'.split(' '))
    expect(options).toEqual({
      alpha: true,
      b: false,
    })
  })
})
