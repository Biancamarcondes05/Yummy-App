import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicial from '../src/components/Inicial/index';
import PeixeImage from '../src/components/img_do_peixe';
import Categorias from '../src/components/Categorias/index';
import Entrada from '../src/components/Entrada/index';
import Entrada1 from '../src/components/Entrada/Entrada1/index';
import Entrada2 from '../src/components/Entrada/Entrada2/index';
import Entrada3 from '../src/components/Entrada/Entrada3/index';
import Entrada4 from '../src/components/Entrada/Entrada4/index';
import Entrada5 from '../src/components/Entrada/Entrada5/index';
import Principal from '../src/components/Principal/index';
import Principal1 from '../src/components/Principal/Principal1/index';
import Principal2 from '../src/components/Principal/Principal2/index';
import Principal3 from '../src/components/Principal/Principal3/index';
import Principal4 from '../src/components/Principal/Principal4/index';
import Principal5 from '../src/components/Principal/Principal5/index';
import Sobremesa from '../src/components/Sobremesa/index';
import Sobremesa1 from '../src/components/Sobremesa/Sobremesa1/index';
import Sobremesa2 from '../src/components/Sobremesa/Sobremesa2/index';
import Sobremesa3 from '../src/components/Sobremesa/Sobremesa3/index';
import Sobremesa4 from '../src/components/Sobremesa/Sobremesa4/index';
import Sobremesa5 from '../src/components/Sobremesa/Sobremesa5/index';
import Drinks from '../src/components/Drinks/index';
import Drink1 from '../src/components/Drinks/Drink1/index';
import Drink2 from '../src/components/Drinks/Drink2/index';
import Drink3 from '../src/components/Drinks/Drink3/index';
import Drink4 from '../src/components/Drinks/Drink4/index';
import Drink5 from '../src/components/Drinks/Drink5/index';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Inicial"
          component={Inicial}
          options={confgHeader}
        />

        <Stack.Screen
          name="Categorias"
          component={Categorias}
          options={confgCat}
        />

        <Stack.Screen name="Entrada" component={Entrada} options={confgCat} />

        <Stack.Screen name="Entrada1" component={Entrada1} options={confgCat}/>
        <Stack.Screen name="Entrada2" component={Entrada2} options={confgCat} />
        <Stack.Screen name="Entrada3" component={Entrada3} options={confgCat} />
        <Stack.Screen name="Entrada4" component={Entrada4} options={confgCat} />
        <Stack.Screen name="Entrada5" component={Entrada5} options={confgCat} />

        <Stack.Screen
          name="Principal"
          component={Principal}
          options={confgCat}
        />

        <Stack.Screen
          name="Principal1"
          component={Principal1}
          options={confgCat}
        />
        <Stack.Screen
          name="Principal2"
          component={Principal2}
          options={confgCat}
        />
        <Stack.Screen
          name="Principal3"
          component={Principal3}
          options={confgCat}
        />
        <Stack.Screen
          name="Principal4"
          component={Principal4}
          options={confgCat}
        />
        <Stack.Screen
          name="Principal5"
          component={Principal5}
          options={confgCat}
        />

        <Stack.Screen
          name="Sobremesa"
          component={Sobremesa}
          options={confgCat}
        />

        <Stack.Screen
          name="Sobremesa1"
          component={Sobremesa1}
          options={confgCat}
        />
        <Stack.Screen
          name="Sobremesa2"
          component={Sobremesa2}
          options={confgCat}
        />
        <Stack.Screen
          name="Sobremesa3"
          component={Sobremesa3}
          options={confgCat}
        />
        <Stack.Screen
          name="Sobremesa4"
          component={Sobremesa4}
          options={confgCat}
        />
        <Stack.Screen
          name="Sobremesa5"
          component={Sobremesa5}
          options={confgCat}
        />

        <Stack.Screen name="Drinks" component={Drinks} options={confgCat} />

        <Stack.Screen name="Drink1" component={Drink1} options={confgCat} />
        <Stack.Screen name="Drink2" component={Drink2} options={confgCat} />
        <Stack.Screen name="Drink3" component={Drink3} options={confgCat} />
        <Stack.Screen name="Drink4" component={Drink4} options={confgCat} />
        <Stack.Screen name="Drink5" component={Drink5} options={confgCat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const confgHeader = {
  headerShown: false,
};

const confgCat = {
  headerTitle: () => <PeixeImage />,
  headerTintColor: '#ff9900',
  headerStyle: {
    backgroundColor: '#859497',
    borderBottomColor: '#ff9900',
    margin: 30,
  },
};
