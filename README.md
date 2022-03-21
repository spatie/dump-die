
[<img src="https://github-ads.s3.eu-central-1.amazonaws.com/support-ukraine.svg?t=1" />](https://supportukrainenow.org)

# dump-die

[![Latest Version on NPM](https://img.shields.io/npm/v/dump-die.svg?style=flat-square)](https://npmjs.com/package/dump-die)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![Build Status](https://img.shields.io/travis/spatie/dump-die.svg?style=flat-square)](https://travis-ci.org/spatie/dump-die)

Dump an object and kill the process in node.js for quick debugging. Based on Laravel's [`dd()` function](http://laravel.com/docs/master/helpers#method-dd).

## Support us

[<img src="https://github-ads.s3.eu-central-1.amazonaws.com/dump-die.jpg?t=1" width="419px" />](https://spatie.be/github-ad-click/dump-die)

We invest a lot of resources into creating [best in class open source packages](https://spatie.be/open-source). You can support us by [buying one of our paid products](https://spatie.be/open-source/support-us).

We highly appreciate you sending us a postcard from your hometown, mentioning which of our package(s) you are using. You'll find our address on [our contact page](https://spatie.be/about-us). We publish all received postcards on [our virtual postcard wall](https://spatie.be/open-source/postcards).

## Postcardware

You're free to use this package (it's [MIT-licensed](LICENSE.md)), but if it makes it to your production environment you are required to send us a postcard from your hometown, mentioning which of our package(s) you are using.

Our address is: Spatie, Kruikstraat 22, 2018 Antwerp, Belgium.

The best postcards will get published on the open source page on our website.

## Installation

```bash
npm install dump-die
```

## Usage

Calling `dd` will print the object in your terminal and kill the process.

```es6
const dd = require('dump-die')

let myObject = {
    foo: 'bar',
    baz: function() {
        return 'Hi'
    }
}

```

Outputs:

```
{ foo: 'bar',
  baz:
   { [Function]
     [length]: 0,
     [name]: '',
     [prototype]: { [constructor]: [Circular] } } }
```

You can dump any amount of objects.

```es6
let foo = 'bar', hodor = { hodor: 'hodor' }
dd(foo, baz, hodor)
```

Outputs:

```
'bar'
{ hodor: 'hodor' }
```

If you don't want to kill the process, you can require the inspect function (which is a simple wrapper around node.js' `util.inspect`)

```es6
const inspect = require('dump-die/lib/inspect')

inspect({ foo: 'bar' }) // => '{ foo: \u001b[32m\'bar\'\u001b[39m }'
```

## Testing

You can run the tests (ESLint & Mocha) with:

```bash
npm run test
```

## Contributing

Please see [CONTRIBUTING](https://github.com/spatie/.github/blob/main/CONTRIBUTING.md) for details.

## Security

If you discover any security related issues, please email [security@spatie.be](mailto:security@spatie.be) instead of using the issue tracker.

## Credits

- [Sebastian De Deyne](https://github.com/sebastiandedeyne)
- [All Contributors](../../contributors)

## About Spatie

Spatie is a webdesign agency in Antwerp, Belgium. You'll find an overview of all our open source projects [on our website](https://spatie.be/opensource).

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
