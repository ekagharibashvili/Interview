// In case we want capture the type of the aargument we use generic types
// with this type we can capture type of the ruturned information, that can't do with 'any' type
function identity<Type>(arg: Type): Type {
    return arg;
}