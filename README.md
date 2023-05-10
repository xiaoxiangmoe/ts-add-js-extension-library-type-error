# ts-add-js-extension-library-type-error

```sh
yarn build
yarn start


yarn workspace nodenext-type-error run build # FIXME: @types/yargs is needed, because ts-add-js-extension's dts file import it by accident
yarn workspace nodenext-type-error run start
# then it will log:
# typeof object is function
# typeof function_ is undefined
```
