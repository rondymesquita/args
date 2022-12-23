const isBoolean = (value: string) => {
  return ['true', 'false'].includes(value)
}

const parseValue = (value: any) => {
  if (isBoolean(value)) {
    return value === 'true'
  } else if (!value) {
    return true
  } else if (value === '0') {
    return 0
  } else {
    console.log(value)
    return Number(value) || value
  }
}

export = (args: any) => {
  console.log(args)

  const options: Record<string, any> = {}
  args.map((arg: any) => {
    const doubleDash = arg.match(/^--(\w*)(=(.*))?$/)

    if (doubleDash) {
      const key = doubleDash[1]
      const value = doubleDash[3]
      options[key] = parseValue(value)
    }

    const singleDash = arg.match(/^-(\w*)(=(.*))?$/)

    if (singleDash) {
      const key = singleDash[1]
      const value = singleDash[3]
      options[key] = parseValue(value)
    }
  })

  console.log(options)
  return options
}
