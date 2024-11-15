
import { ShapeProvider } from './ShapeContext';
import { ToolboxProvider } from './ToolboxContext';
import { DrawingsProvider } from './DrawingsContext';

function composeProviders(providers){

    return providers.reduce((Accumulated, Current) => (
        ({children}) => 
            <Accumulated>
                <Current>{children}</Current>
            </Accumulated>
    ));
}

export const IndexProvider= composeProviders([
    ShapeProvider, ToolboxProvider, DrawingsProvider
]);