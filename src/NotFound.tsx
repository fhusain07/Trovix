import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-9xl font-display font-bold gradient-text mb-4">404</h1>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Page Not Found</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="cursor-pointer">
                <Home className="mr-2 h-5 w-5" />
                Go Home
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.history.back()}
              className="cursor-pointer"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default NotFound;