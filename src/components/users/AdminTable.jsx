export default function AdminTable({ data, onActionClick }) {
  return (
    <div>
      <div className='mt-8 flow-root'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
            <table className='min-w-full divide-y divide-gray-300'>
              <thead>
                <tr>
                  <th
                    scope='col'
                    className='py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-0'>
                    Name
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500'>
                    Email
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500'>
                    Role
                  </th>
                  <th scope='col' className='relative py-3 pl-3 pr-4 sm:pr-0'>
                    <span className='sr-only'>Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200 bg-white'>
                {data.map(person => (
                  <tr key={person.id} className='even:bg-gray-100'>
                    <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0'>
                      {person.firstName + person.lastName}
                    </td>
                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                      {person.email}
                    </td>
                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                      {person.role}
                    </td>
                    <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0'>
                      <button
                        onClick={() => onActionClick(person.id)}
                        className='text-indigo-600 hover:text-indigo-900'>
                        Ver<span className='sr-only'>, {person.name}</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
