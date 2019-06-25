import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Styles.css'

function Transaction({expanded, handleChange, transaction}) {

  const {typeTransaction, amount, date, account, id} = transaction;
  const isExpanded = expanded === id;
  const isDebit =  typeTransaction === "DEBIT";
  const typeCss = isDebit  ? "Debit"  : "Credit";
  return (
      <ExpansionPanel expanded={isExpanded} onChange={() => handleChange(id)}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${id}-content`}
          id={`${id}-header`}
          >
      <Typography className={typeCss}> {typeTransaction} :  $ {amount}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {typeTransaction} - Date: {date} - Account: {account.id}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
  );
}

export default Transaction;
