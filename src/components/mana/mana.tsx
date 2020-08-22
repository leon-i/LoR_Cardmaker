import React from 'react';
import { changeMana } from '../../actions/mana_actions';
import { connect } from 'react-redux';
import Button from '../ui/button';

interface Props {
    mana: number,
    changeMana: typeof changeMana
}

const Mana : React.FC<Props> = ({mana, changeMana}) => (
    <>
        <div>{mana}</div>
        <Button onClick={() => changeMana(4)}>
            Reset
        </Button>
    </>
)

const mapStateToProps = ({ card: { mana } }: any) => ({
    mana
});

const mapDispatchToProps = ({
    changeMana
});

export default connect(mapStateToProps, mapDispatchToProps)(Mana);