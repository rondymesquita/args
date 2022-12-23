import args from './index'
// args(process.argv)
args(
  '--alpha=alphavalue --beta --gama=true --delta=false -c -a=avalue fulano sicrano'.split(
    ' ',
  ),
)
