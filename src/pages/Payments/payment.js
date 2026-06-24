import React, { useState } from 'react';
import './Payment.css';
import { FiDollarSign, FiCreditCard, FiCalendar, FiDownload, FiPrinter, FiChevronDown } from 'react-icons/fi';
import { FaBangladeshiTakaSign } from "react-icons/fa6";
const Payments = () => {
  const [activeTab, setActiveTab] = useState('outstanding');
  const [expandedInvoice, setExpandedInvoice] = useState(null);

  // Sample data
  const paymentData = {
    balance: {
      outstanding: 1250.00,
      paid: 8750.00,
      total: 10000.00
    },
    invoices: [
      {
        id: "INV-2023-05-001",
        date: "May 15, 2023",
        dueDate: "June 15, 2023",
        amount: 2500.00,
        status: "Paid",
        items: [
          { description: "Tuition Fee - Spring 2023", amount: 2000.00 },
          { description: "Library Fine", amount: 100.00 },
          { description: "Lab Fee", amount: 400.00 }
        ]
      },
      {
        id: "INV-2023-01-002",
        date: "January 10, 2023",
        dueDate: "February 10, 2023",
        amount: 2500.00,
        status: "Paid",
        items: [
          { description: "Tuition Fee - Winter 2023", amount: 2000.00 },
          { description: "Student Activity Fee", amount: 300.00 },
          { description: "Technology Fee", amount: 200.00 }
        ]
      },
      {
        id: "INV-2023-09-003",
        date: "September 5, 2023",
        dueDate: "October 5, 2023",
        amount: 2500.00,
        status: "Partial",
        items: [
          { description: "Tuition Fee - Fall 2023", amount: 2000.00 },
          { description: "Health Insurance", amount: 500.00 }
        ]
      },
      {
        id: "INV-2023-11-004",
        date: "November 20, 2023",
        dueDate: "December 20, 2023",
        amount: 2500.00,
        status: "Unpaid",
        items: [
          { description: "Tuition Fee - Fall 2023 (2nd Installment)", amount: 2500.00 }
        ]
      }
    ],
    paymentMethods: [
      { type: "Credit Card", lastFour: "4242", expiry: "12/25" },
      { type: "Bank Transfer", bank: "City Bank", account: "XXXXXX7890" }
    ],
    transactionHistory: [
      { date: "May 10, 2023", description: "Credit Card Payment", amount: 2500.00, status: "Completed" },
      { date: "January 5, 2023", description: "Bank Transfer", amount: 2500.00, status: "Completed" },
      { date: "September 1, 2023", description: "Partial Payment", amount: 1500.00, status: "Completed" }
    ]
  };

  const toggleInvoice = (index) => {
    setExpandedInvoice(expandedInvoice === index ? null : index);
  };

  return (
    <div className="payments-container">
      {/* Header Section */}
      <div className="payments-header">
        <h1>Payment <span className="highlight">Portal</span></h1>
        <p>Manage your tuition and fee payments</p>
      </div>

      {/* Balance Summary */}
       <div className="balance-summary">
      <div className="balance-card outstanding">
        <div className="balance-icon">
          <FaBangladeshiTakaSign />
        </div>
        <div className="balance-details">
          <span className="balance-label">Outstanding Balance</span>
          <span className="balance-amount">
            <FaBangladeshiTakaSign />{paymentData.balance.outstanding.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="balance-card paid">
        <div className="balance-icon">
          <FiCreditCard />
        </div>
        <div className="balance-details">
          <span className="balance-label">Total Paid</span>
          <span className="balance-amount">
            <FaBangladeshiTakaSign />{paymentData.balance.paid.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="balance-card total">
        <div className="balance-icon">
          <FiCalendar />
        </div>
        <div className="balance-details">
          <span className="balance-label">Total Charges</span>
          <span className="balance-amount">
            <FaBangladeshiTakaSign />{paymentData.balance.total.toFixed(2)}
          </span>
        </div>
      </div>
    </div>

      {/* Navigation Tabs */}
      <div className="payments-tabs">
        <button 
          className={`tab-button ${activeTab === 'outstanding' ? 'active' : ''}`}
          onClick={() => setActiveTab('outstanding')}
        >
          Outstanding
        </button>
        <button 
          className={`tab-button ${activeTab === 'invoices' ? 'active' : ''}`}
          onClick={() => setActiveTab('invoices')}
        >
          All Invoices
        </button>
        <button 
          className={`tab-button ${activeTab === 'methods' ? 'active' : ''}`}
          onClick={() => setActiveTab('methods')}
        >
          Payment Methods
        </button>
        <button 
          className={`tab-button ${activeTab === 'history' ? 'active' : ''}`}
          onClick={() => setActiveTab('history')}
        >
          Transaction History
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'outstanding' && (
          <div className="outstanding-content">
            <h3>Outstanding Payments</h3>
            <div className="invoice-list">
              {paymentData.invoices
                .filter(invoice => invoice.status !== "Paid")
                .map((invoice, index) => (
                  <div key={index} className="invoice-card">
                    <div className="invoice-header">
                      <div className="invoice-info">
                        <span className="invoice-id">{invoice.id}</span>
                        <span className="invoice-date">Due: {invoice.dueDate}</span>
                      </div>
                      <div className="invoice-amount">
                        <span><FaBangladeshiTakaSign/>{invoice.amount.toFixed(2)}</span>
                        <span className={`status-badge ${invoice.status.toLowerCase()}`}>
                          {invoice.status}
                        </span>
                      </div>
                    </div>
                    <div className="invoice-actions">
                      <button className="pay-button">Pay Now</button>
                      <button className="details-button" onClick={() => toggleInvoice(index)}>
                        Details <FiChevronDown className={`expand-icon ${expandedInvoice === index ? 'expanded' : ''}`} />
                      </button>
                    </div>
                    {expandedInvoice === index && (
                      <div className="invoice-details">
                        <div className="detail-row">
                          <span>Invoice Date:</span>
                          <span>{invoice.date}</span>
                        </div>
                        <div className="detail-row">
                          <span>Due Date:</span>
                          <span>{invoice.dueDate}</span>
                        </div>
                        <div className="items-list">
                          <h4>Items:</h4>
                          {invoice.items.map((item, i) => (
                            <div key={i} className="item-row">
                              <span>{item.description}</span>
                              <span><FaBangladeshiTakaSign/>{item.amount.toFixed(2)}</span>
                            </div>
                          ))}
                        </div>
                        <div className="invoice-total">
                          <span>Total Amount:</span>
                          <span><FaBangladeshiTakaSign/>{invoice.amount.toFixed(2)}</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        )}

        {activeTab === 'invoices' && (
          <div className="invoices-content">
            <h3>All Invoices</h3>
            <div className="invoice-table">
              <table>
                <thead>
                  <tr>
                    <th>Invoice ID</th>
                    <th>Date</th>
                    <th>Due Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentData.invoices.map((invoice, index) => (
                    <tr key={index}>
                      <td>{invoice.id}</td>
                      <td>{invoice.date}</td>
                      <td>{invoice.dueDate}</td>
                      <td><FaBangladeshiTakaSign/>{invoice.amount.toFixed(2)}</td>
                      <td>
                        <span className={`status-badge ${invoice.status.toLowerCase()}`}>
                          {invoice.status}
                        </span>
                      </td>
                      <td>
                        <button className="view-button">View</button>
                        <button className="download-button">
                          <FiDownload />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'methods' && (
          <div className="methods-content">
            <h3>Payment Methods</h3>
            <div className="methods-list">
              {paymentData.paymentMethods.map((method, index) => (
                <div key={index} className="method-card">
                  <div className="method-icon">
                    {method.type === "Credit Card" ? <FiCreditCard /> : <FaBangladeshiTakaSign/>}
                  </div>
                  <div className="method-details">
                    <h4>{method.type}</h4>
                    {method.type === "Credit Card" ? (
                      <p>•••• •••• •••• {method.lastFour} (Expires {method.expiry})</p>
                    ) : (
                      <p>{method.bank} ••••{method.account.slice(-4)}</p>
                    )}
                  </div>
                  <div className="method-actions">
                    <button className="edit-button">Edit</button>
                    <button className="remove-button">Remove</button>
                  </div>
                </div>
              ))}
            </div>
            <button className="add-method-button">
              + Add New Payment Method
            </button>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="history-content">
            <h3>Transaction History</h3>
            <div className="history-table">
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Receipt</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentData.transactionHistory.map((transaction, index) => (
                    <tr key={index}>
                      <td>{transaction.date}</td>
                      <td>{transaction.description}</td>
                      <td><FaBangladeshiTakaSign/>{transaction.amount.toFixed(2)}</td>
                      <td>
                        <span className={`status-badge ${transaction.status.toLowerCase()}`}>
                          {transaction.status}
                        </span>
                      </td>
                      <td>
                        <button className="download-button">
                          <FiDownload />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Payment Action Bar */}
      <div className="payment-actions">
        <button className="make-payment-button">
          Make a Payment
        </button>
        <div className="export-options">
          <button className="export-button">
            <FiDownload /> Export Statements
          </button>
          <button className="export-button">
            <FiPrinter /> Print
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payments;