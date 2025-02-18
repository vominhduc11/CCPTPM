import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    { ignores: ['dist', 'vite.config.ts'] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'no-console': 'error', // không được sử dụng console.log
            'no-unused-vars': 'error', // không được sử dụng biến không sử dụng
            eqeqeq: 'error', // so sánh === hoặc !==
            curly: 'error', // phải có dấu {} sau if, else, for, while
            camelcase: 'error', // biến phải viết theo kiểu camelCase
            'no-undef': 'error', // không được sử dụng biến chưa khai báo
            semi: 'error', // phải có dấu ; sau mỗi dòng
            quotes: ['error', 'single'], // phải sử dụng dấu ' thay vì "
            indent: ['error', 4], // thụt 4 space
            'no-multiple-empty-lines': ['error', { max: 1 }], // không được có nhiều hơn 1 dòng trống
            'no-trailing-spaces': 'error', // không được có dấu cách ở cuối dòng
            'react-hooks/rules-of-hooks': 'error', // phải sử dụng hooks theo quy tắc của react hooks
            'react-hooks/exhaustive-deps': 'error', // phải sử dụng tất cả các dependencies trong useEffect

            'react-refresh/only-export-components': 'warn', // chỉ được export component trong file jsx hoặc tsx (không được export biến, hàm)
            'react/prop-types': 0, // không cần kiểm tra prop-types
            'react/display-name': 0, // không cần kiểm tra display name

            'no-lonely-if': 'error', // không được if lẻ không else if hoặc else
            'no-multi-spaces': 'error', // không được có nhiều hơn 1 dấu cách liền nhau
            'space-before-blocks': ['error', 'always'], // phải có dấu cách trước dấu {} của block
            'object-curly-spacing': [1, 'always'], // phải có dấu cách trong object
            'array-bracket-spacing': 1, // phải có dấu cách trong mảng
            'linebreak-style': 0, // không kiểm tra dấu xuống dòng
            'no-unexpected-multiline': 'error', // không được xuống dòng bất ngờ
            'keyword-spacing': 1, // phải có dấu cách sau keyword
            'comma-dangle': 1, // phải có dấu , cuối cùng trong object, array
            'comma-spacing': 1, // phải có dấu cách sau dấu ,
            'arrow-spacing': 1, // phải có dấu cách trước và sau dấu =>
        },
    }
);
