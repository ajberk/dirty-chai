
[![travis](https://travis-ci.org/ajberk/dirty-chai.svg?branch=master)](https://travis-ci.org/ajberk/dirty-chai)

https://www.npmjs.com/package/very-dirty-chai


Do you ever feel exaspirated? Mad at your coworkers? Mad at javascript? Do you ever want a way to express your feelings while also writing tested, maintainable code?

If yes, dirty chai is for you:

```
import chai from 'chai'
import dirtyChai from 'very-dirty-chai'
chai.use(dirtyChai());
```

Matchers specifically designed to help you get some rage out:

# API
### fucking: 
you can pretend you are yelling

usage:

`expect(true).to.fucking.be.true`

`expect(false).to.be.fucking.false`

Also comes in capitalized form

`expect(true).to.FUCKING.be.true`


### just:
for those moments where you just fucking need it to work

usage:
`expect(true).to.just.fucking.be.true`

`expect(true).to.fucking.JUST.be.true`



